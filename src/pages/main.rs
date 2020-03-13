use crate::{models, views};
use afterglow::prelude::*;

pub struct App {
    player: Container<models::video::Model>,
    playlist: Container<models::playlist::Playlist>,
}

impl LifeCycle for App {
    fn new(render_tx: Sender<()>) -> Self {
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
        sender: MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        dodrio!(bump,
            <div class="hero is-fullheight is-light is-unselectable">
                <div class="hero-body">
                    <div class="container" style="position: sticky; top: 0px">
                        <div class="columns" style="height: 100%">
                            <div class="column is-8">
                            { target.player.render(ctx)}
                            </div>
                            <div class="column is-4">
                            { target.playlist.render(ctx)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
