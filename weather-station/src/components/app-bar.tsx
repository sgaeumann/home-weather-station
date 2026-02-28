import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export function AppBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>
                            <a href="/">Home</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <a href="/details">Details</a>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
