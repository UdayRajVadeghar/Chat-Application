"use client";

import { usePreferences } from "@/store/usePreferences";
import { MoonIcon, SunIcon, Volume2, VolumeXIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSound } from "use-sound";
import { Button } from "./ui/button";

const PreferencesTab = () => {
  const { setTheme } = useTheme();

  const { soundEnabled, setSoundEnabled } = usePreferences();

  const [playMouseClick] = useSound("/sound/mouse-click.mp3");
  const [playSoundOn] = useSound("/sound/sound-on.mp3", { volume: 0.5 });
  const [playSoundOff] = useSound("/sound/sound-off.mp3", { volume: 0.3 });

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
          soundEnabled && playMouseClick();
        }}
      >
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("dark");
          soundEnabled && playMouseClick();
        }}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setSoundEnabled(!soundEnabled)}
      >
        {soundEnabled ? (
          <Volume2 className="size-[1.2rem] text-muted-foreground" />
        ) : (
          <VolumeXIcon className="size-[1.2rem] text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};

export default PreferencesTab;
