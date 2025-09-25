  import Image from "next/image"
  import { Calendar, Home, Inbox, Search, Settings, Plus, Folders } from "lucide-react"

  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

  // Menu items.
  const items = [
    {
      title: "New graph",
      url: "#",
      icon: Plus,
    },
    {
      title: "Progects",
      url: "#",
      icon: Folders,
    },
  
    {
      title: "Recent",
      url: "#",
      icon: "Search",
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

  export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="Evograph Logo"
                width={24}
                height={24}
              />
              <span>Evograph</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}