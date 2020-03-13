use super::play as playview;
use crate::models::play;
use crate::models::playlist;
use afterglow::prelude::*;
use strum::IntoEnumIterator;

#[derive(Default)]
pub struct View;
impl Renderer for View {
    type Target = playlist::Playlist;
    type Data = playlist::Playlist;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let filter_panel = FilterBox.view(&target.filter, ctx, sender.clone());
        let plays = target.plays.iter().enumerate().map(|(idx, play)| {
            let selected = target.selected.map(|v| v == idx).unwrap_or_default();
            let filtered = if target.filter.genre.len() == 0 {
                true
            } else {
                target.filter.genre.contains(&play.genre)
            };
            playview::View::default().view(&(play, idx, selected, filtered), ctx, sender.clone())
        });
        dodrio!(bump,
            <div class="box" style="max-height: 80vh; min-height: 100%; overflow-x: scroll">
                <p class="heading">"list of plays"</p>
                <br/>
                { filter_panel }
                <br/>
                { plays }
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
        sender: MessageSender<Self::Data>,
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
        let option_group = dodrio!(bump, <div class="field is-grouped">{ options }</div>);
        // let panel = dodrio!(bump,
        //     <div class="control">
        //         <div class="select is-multiple" style={
        //             if !target.active {
        //                 "display: None"
        //             } else {
        //                 ""
        //             }
        //         }>
        //             <select multiple=true>
        //                 { options }
        //             </select>
        //         </div>
        //     </div>
        // );

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
                <div class="card-content" style={ if target.active {""} else {"display: None"}}>{ option_group }</div>
            </div>
            // <div class="field">
            //     <div class="label">"toggle filter"</div>
            //     <div class="control">
            //         <div
            //         onclick={ consume(|e| { playlist::FilterEvent::Toggle }, &sender) }
            //         class="button"></div>
            //     </div>
            //     { panel }
            // </div>
        )
    }
}
