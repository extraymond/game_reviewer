use strum_macros::*;

use dodrio_ext::prelude::*;

#[derive(Default)]
pub struct Page {
    file: Option<String>,
    plays: Vec<Play>,
    selected: Option<usize>,
}

pub struct Play {
    genre: Genre,
    time: f32,
}

#[derive(Display)]
pub enum Genre {
    Offesne,
    Defense,
}

impl LifeCycle for Page {
    fn new(render_tx: Sender<()>) -> Self {
        Page::default()
    }
}

pub enum VideoEvents {
    NewFile(String),
}

impl Messenger for VideoEvents {
    type Target = Page;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: Sender<Box<dyn Messenger<Target = Self::Target>>>,
    ) -> bool {
        match self {
            VideoEvents::NewFile(url) => {
                target.file.replace(url.clone());
                true
            }
        }
    }
}

pub enum PlaylistEvents {
    Clicked(usize),
}

impl Messenger for PlaylistEvents {
    type Target = Page;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: Sender<Box<dyn Messenger<Target = Self::Target>>>,
    ) -> bool {
        match self {
            PlaylistEvents::Clicked(idx) => {
                target.selected.replace(*idx);
                true
            }
        }
    }
}

pub struct PageView;
impl Renderer for PageView {
    type Target = Page;
    type Data = Page;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: Sender<Box<dyn Messenger<Target = Self::Data>>>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let rows = (0..10).map(|idx| {
            let is_selected = target.selected.map(|old| old == idx).unwrap_or_default();
            RowView.view(&(idx, is_selected), ctx, sender.clone())
        });
        dodrio!(bump,
                <div class="box">
                    { rows }
                </div>
        )
    }
}

pub struct RowView;

impl Renderer for RowView {
    type Target = (usize, bool);
    type Data = Page;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: Sender<Box<dyn Messenger<Target = Self::Data>>>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let idx = target.0.clone();
        dodrio!(bump,
                <div class="box" onclick={ consume(move |e|{ PlaylistEvents::Clicked(idx)}, &sender)}>
                    <div class={
                        if target.1 {
                            "tag is-black"
                        } else {
                            "tag"
                        }
                    }>
                    { text(bf!(in bump, "{}", target.0).into_bump_str()) }
                    </div>
                </div>
        )
    }
}

pub fn init_page() {
    let block = web_sys::window()
        .map(|win| win.document())
        .flatten()
        .map(|doc| doc.get_element_by_id("app"))
        .flatten()
        .unwrap();
    let mut entry = Entry::new();
    let app = Page::new(entry.render_tx.clone());
    entry.mount_vdom(app, &block.unchecked_into(), Box::new(PageView));
}
