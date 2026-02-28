import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

export function WeatherCard(){
    return (
        <div className="w-100">
            <Card>
                <CardHeader>
                    <CardTitle>Home temperature</CardTitle>
                    <CardDescription>The home temperature</CardDescription>
                    <CardAction>
                        <Button>Click me</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>28°</p>
                </CardContent>
                <CardFooter>
                    <p>Last measured 28.02.2026 at 12:30</p>
                </CardFooter>
            </Card>
        </div>
    )
} 