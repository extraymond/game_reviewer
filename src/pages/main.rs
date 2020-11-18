use crate::{models, views};
use afterglow::prelude::*;
use typed_html::dodrio;

pub struct App {
    player: Container<models::video::Model>,
    playlist: Container<models::playlist::Playlist>,
}

impl LifeCycle for App {
    fn new(render_tx: Sender<((), oneshot::Sender<()>)>) -> Self {
        let bus = BusService::<models::event_bus::EventsMsg>::new();
        let mut player_data = models::video::Model::new(render_tx.clone());
        player_data.bus.replace(bus.clone());
        let player = Container::new(player_data, Box::new(views::video::View), render_tx.clone());
        let mut playlist_data = models::playlist::Playlist::new(render_tx.clone());
        playlist_data.bus.replace(bus.clone());

        let playlist = Container::new(
            playlist_data,
            Box::new(views::playlist::View),
            render_tx.clone(),
        );
        App { player, playlist }
    }
}

#[derive(Default)]
pub struct AppView;

impl Renderer for AppView {
    type Target = App;
    type Data = App;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: &MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        dodrio!(bump,
            <div class="is-unselectable grid">
                { target.player.render(ctx)}
                { target.playlist.render(ctx)}
            </div>
        )
    }
}
