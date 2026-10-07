import { RiSettingsLine, RiTranslate2, type RemixiconComponentType } from "@remixicon/react";

interface UserDropdownItem {
  icon: RemixiconComponentType;
  alias: string;
  href?: string;
  items?: string[];
}

export const USER_DROPDOWN_ITEMS: UserDropdownItem[] = [
  // TODO: визуальная заглушка, маршрут настроек ещё не добавлен
  {
    icon: RiSettingsLine,
    alias: "Settings",
    href: "/profile/settings",
  },

  // TODO: визуальная заглушка, i18n ещё не подключён
  {
    icon: RiTranslate2,
    alias: "Language",
    items: ["Українська", "English"],
  },
];
