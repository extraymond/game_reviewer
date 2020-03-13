use crate::models::{play, playlist};
use afterglow::prelude::*;
use std::marker::PhantomData;

#[derive(Default)]
pub struct View<'x>(pub PhantomData<&'x ()>);

impl<'x> Renderer for View<'x> {
    type Target = (&'x play::Play, usize, bool, bool);
    type Data = playlist::Playlist;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        dodrio!(bump,
            <div
            onclick={
                let idx = target.1.clone();
                consume(move |e| { playlist::PlaylistMsg::PlayClicked(idx) }, &sender)}
            ondblclick={
                let idx = target.1.clone();
                consume(move |_| { playlist::PlaylistMsg::PlayDBClicked(idx) }, &sender)
            }
            class="box" style= {
                if !target.3 {
                    "display: None"
                } else {
                    if target.2 {
                        "margin-left: 0.25rem; border-left: 0.5rem solid purple;"
                    } else {""}
                }

            }>
                <p>{ text(bf!(in bump, "time: {:.1}", target.0.time).into_bump_str())}</p>
                <p>{ text(bf!(in bump, "genre: {}", target.0.genre).into_bump_str())}</p>
            </div>
        )
    }
}
