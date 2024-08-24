import { MoonIcon, SunIcon, VolumeXIcon } from "lucide-react";
import { Button } from "./ui/button";

const PreferencesTab = () => {
  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button variant={"outline"} size={"icon"}>
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant={"outline"} size={"icon"}>
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant={"outline"} size={"icon"}>
        <VolumeXIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
    </div>
  );
};

export default PreferencesTab;
