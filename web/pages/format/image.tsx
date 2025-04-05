//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useLanguage } from 'r22n';
//components
import Link from 'next/link';
import ImageFormat from 'frui/format/Image';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props';
import Code from 'modules/components/Code';

export default function Home() {
  //hooks
  const { _ } = useLanguage();
  //variables
  const crumbs: Crumb[] = [
    { icon: 'text-height', label: 'Formats', href: '/format' },
    { label: 'Image' }
  ];

  const props = [
    [ _('alt'), _('string'), _('No'), _('Alt text for image') ],
    [ _('className'), _('string'), _('No'), _('Standard HTML class names') ],
    [ _('height'), _('string|number'), _('No'), _('Height of image') ],
    [ _('style'), _('CSS Object'), _('No'), _('Standard CSS object') ],
    [ _('value'), _('string'), _('Yes'), _('Default value') ],
    [ _('width'), _('string|number'), _('No'), _('Width of image') ],
  ];
  //render
  return (
    <LayoutPanel 
      uri="/format/image"
      title="Image Format"
      description="Image formats in FRUI, are ReactJS components that convert values to viewable images."
    >
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow relative h-full">
          <aside className="hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm">
            <h4 className="p-3 border-b border-b1 bg-b1 uppercase font-semibold">
              <Link href="#top">{_('Image')}</Link>
            </h4>
            <ul className="list-disc py-3 pr-3 pl-6">
              <li className="pl-3 pb-1">
                <Link href="#props">
                  {_('Props')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#basic">
                  {_('Basics')}
                </Link>
              </li>
            </ul>
          </aside>
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 id="top" className="flex items-center uppercase font-bold text-xl">
              {_('Image')}
            </h1>
            <Code language="typescript" className="mt-2">
              {`import Image from 'frui/formats/Image';`}
            </Code>
            
            <h2 id="props" className="uppercase font-bold text-lg mt-8">
              {_('Props')}
            </h2>
            <Props props={props} />

            <h2 id="basic" className="uppercase font-bold text-lg mt-8">
              {_('Basics')}
            </h2>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <ImageFormat value="https://images.wsj.net/im-580612/8SR" width="100" />
              </div>
              <Code language="typescript">
                {`<Image value="https://images.wsj.net/im-580612/8SR" width="100" />`}
              </Code>
            </div>

            <div className="flex items-center border-t border-b2 mt-8 pt-4">
              <Link className="text-t2" href="/format/html">
                <i className="fas fa-arrow-left mr-2"></i>
                {_('HTML')}
              </Link>
              <div className="flex-grow"></div>
              <Link className="text-t2" href="/format/imagelist">
                {_('Imagelist')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}
