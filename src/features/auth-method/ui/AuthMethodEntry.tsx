"use client";

import { RiArrowDownSLine } from "@remixicon/react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui";

import { SOCIAL_ITEMS } from "../model/const/items";
import { useSocialAuth } from "../model/hooks/use-social-auth";

export const AuthMethodEntry = () => {
  const { login } = useSocialAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={(props) => (
          <Button size="lg" className="text-sm" {...props}>
            Sign In <RiArrowDownSLine />
          </Button>
        )}
      />
      <DropdownMenuContent className="w-50" align="end">
        {SOCIAL_ITEMS.map((social) => (
          <DropdownMenuItem
            className="text-base"
            key={social.alias}
            onClick={() => login(social.alias)}
          >
            <social.icon className="size-4.5" />
            <span>{social.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
