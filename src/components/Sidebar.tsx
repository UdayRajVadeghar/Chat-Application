import { AvatarImage } from "@radix-ui/react-avatar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { USERS } from "../db/dummy";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const selectedUser = USERS[0];

  return (
    <div className="group realtive flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background">
      {!isCollapsed && (
        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">Chats</p>
          </div>
        </div>
      )}
      <ScrollArea className="gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {USERS.map((user, idx) =>
          isCollapsed ? (
            <TooltipProvider key={idx}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div>
                    <Avatar className="my-1 flex justify-center items-center">
                      <AvatarImage
                        src={user.image || "/user-placeholder.png"}
                        alt="User Profile Image"
                        width={6}
                        height={6}
                        className="border-2 border-white rounded-full w-10 h-10"
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">{user.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {user.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            // Later Today
            <Button key={idx} className=""></Button>
          )
        )}
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
