use crate::models::video;
use afterglow::prelude::*;

#[derive(Default)]
pub struct View;
impl Renderer for View {
    type Target = video::Model;
    type Data = video::Model;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let vid_view = target.file.as_ref().map(|_| {
             Video.view(target, ctx, sender.clone())
        });

        dodrio!(bump,
            <div class="box" style="height: 100%">
                <p class="heading">"video player"</p>
                { vid_view }
                <hr/>
                { Panel.view(target, ctx, sender)}
            </div>
        )
    }
}

pub struct Video;
impl Renderer for Video {
    type Target = video::Model;
    type Data = video::Model;
    fn view<'a>(&self, target: &Self::Target, ctx: &mut RenderContext<'a>, sender: MessageSender<Self::Data>) -> Node<'a> {
        let bump = ctx.bump;
        dodrio!(bump, 
            <video
            onloadeddata={ consume(|e| {
                let vid: web_sys::HtmlMediaElement = e.target().map(|t| t.unchecked_into()).unwrap();
                video::FileEvent::VidLoaded(vid)
            }, &sender)}
            src={
                target.url.as_ref().map(|url| url.to_string()).unwrap_or_default()
            } controls={
                target.url.is_some()
            }></video>
        )
    }
}

pub struct Panel;
impl Renderer for Panel {
    type Target = video::Model;
    type Data = video::Model;

    fn view<'a>(
        &self,
        target: &Self::Target,
        ctx: &mut RenderContext<'a>,
        sender: MessageSender<Self::Data>,
    ) -> Node<'a> {
        let bump = ctx.bump;
        let file_name = target
            .file
            .as_ref()
            .map(|file| file.name())
            .unwrap_or("no file selected".to_string());

        let close_button = target.file.as_ref().map(|_| {
            dodrio!(bump, <div 
                onclick={ consume(|e| { video::FileEvent::Removed }, &sender)}
                class="button">"unset file"</div>)
        });

        dodrio!(bump,
            <div class="level box">
                <div class="level-left">
                    <div class="level-item">
                        <div class="file has-name">
                            <label class="file-label">
                                <input
                                onchange= { consume(|e| { video::FileEvent::Added(e) }, &sender) }
                                class="file-input" type="file"/>
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    "Choose a file…"
                                </span>
                                </span>
                            <span class="file-name">{ text(bf!(in bump, "{}", file_name).into_bump_str())}</span>
                            </label>
                            </div>
                        </div>
                </div>
                    <div class="level-right">
                        { close_button }
                    </div>
                </div>
        )
    }
}
