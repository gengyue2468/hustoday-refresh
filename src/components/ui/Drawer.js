import { Drawer } from "vaul";

export default function OpenDrawer({ title, desc, content, children }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-lg z-20" />
        <Drawer.Content className="max-w-xl mx-auto bg-neutral-50 dark:bg-neutral-950 rounded-t-3xl border border-neutral-200 dark:border-neutral-800 h-fit fixed bottom-0 left-0 right-0 outline-none z-30">
          <div className="flex justify-center">
            <div className="rounded-full bg-neutral-200 dark:bg-neutral-800 w-18 h-2 mt-4" />
          </div>
          <div className="px-8 py-12">
            <Drawer.Title className="font-semibold text-3xl">
              {title}
            </Drawer.Title>
            <Drawer.Description className="font-semibold text-2xl opacity-50">
              {desc}
            </Drawer.Description>

            <div className="mt-8">{content}</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
