use super::play as playview;
use crate::models::play;
use crate::models::playlist;
use afterglow::prelude::*;
use strum::IntoEnumIterator;
use typed_html::dodrio;

#[derive(Default)]
pub struct View;
impl Renderer for View {
    type Target = playlist::Playlist;
    type Data = playlist::Playlist;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: &MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let filter_panel = FilterBox.view(&target.filter, ctx, &sender);
        let plays = target.plays.iter().enumerate().map(|(idx, play)| {
            let selected = target.selected.map(|v| v == idx).unwrap_or_default();
            let filtered = if target.filter.genre.len() == 0 {
                true
            } else {
                target.filter.genre.contains(&play.genre)
            };
            playview::View::default().view(&(play, idx, selected, filtered), ctx, &sender)
        });
        let plays = dodrio!(bump, <div class="plays">{ plays }</div>);
        dodrio!(bump,
            <div class="playlist-grid box">
                <div class="top-panel">
                <p class="heading">"list of plays"</p>
                { filter_panel }
                </div>
                { plays }
                { Tableview.view(target, ctx, sender) }
            </div>
        )
    }
}

#[derive(Default)]
pub struct FilterBox;
impl Renderer for FilterBox {
    type Target = playlist::Filter;
    type Data = playlist::Playlist;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: &MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let status = if target.active { "hide" } else { "show" };
        let options = play::Genre::iter().map(|n| {
            let b_str = bf!(in bump, "{}", n).into_bump_str();
            let class = if target.genre.get(&n).is_some() {
                "button is-black"
            } else {
                "button"
            };
            dodrio!(bump,
                <div class="control">
                    <div class={class}
                    onclick={ consume(move |_| { playlist::FilterEvent::ToggleGenre(n)}, &sender)}
                    >{ text(b_str) }</div>
                </div>
            )
        });
        let option_group =
            dodrio!(bump, <div class="field is-grouped is-grouped-multiline">{ options }</div>);

        let title_icon = if target.active {
            dodrio!(bump,
                <span class="icon">
                    <i class="fas fa-arrow-up"/>
                </span >
            )
        } else {
            dodrio!(bump,
                <span class="icon">
                    <i class="fas fa-arrow-down"/>
                </span>
            )
        };

        dodrio!(bump,
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title">"filter panel"</div>
                    <a
                    onclick={consume(|_| { playlist::FilterEvent::Toggle }, &sender)}
                    class="card-header-icon">
                        { title_icon }
                    </a>
                </div>
                <div class="card-content" style={ if target.active {""} else {"display: None"}}>
                { option_group }
                </div>
            </div>
        )
    }
}

pub struct Tableview;
impl Renderer for Tableview {
    type Target = playlist::Playlist;
    type Data = playlist::Playlist;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: &MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;

        let mut rows = play::Genre::iter().collect::<Vec<play::Genre>>();
        rows.sort_by(|a, b| format!("{}", a).cmp(&format!("{}", b)));
        let rows = rows
            .iter()
            .map(|n| {
                let genre = bf!(in bump, "{}", n).into_bump_str();

                let counts = target.plays.iter().filter(|play| play.genre == *n).count();
                let counts = bf!(in bump, "{}", counts).into_bump_str();

                let genre = dodrio!(bump, <td>{ text(genre)}</td>);
                let counts = dodrio!(bump, <td class="has-text-right">{ text(counts)}</td>);
                vec![genre, counts]
            })
            .map(|a| dodrio!(bump, <tr>{ a }</tr>));

        dodrio!(bump,
            <div class="info box">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>"genre"</th>
                            <th class="has-text-right">"counts"</th>
                        </tr>
                    </thead>
                    <tbody>
                    { rows }
                    </tbody>
                </table>
            </div>
        )
    }
}
