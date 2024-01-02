import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditorWindow from './CodeEditorWindow';
import { files } from './FileTree/data';
import Entry from './FileTree/Entry';
import Terminal from './terminal/Terminal';

export default function Playground() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-full rounded-lg border dark:bg-zinc-800 bg-white dark:border-zinc-800 border-zinc-200"
    >
      <ResizablePanel defaultSize={20}>
        <div style={{ padding: '10px', overflowY: 'scroll' }}>
          {files.children?.map((entry, index) => (
            <Entry key={index} entry={entry} depth={1} />
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={80}>
            <CodeEditorWindow />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={20}>
            <Terminal />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
