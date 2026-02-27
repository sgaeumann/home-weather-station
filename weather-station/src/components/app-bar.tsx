import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function AppBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <a href="/">Home</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <a href="/details">Details</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    )
}
