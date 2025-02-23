import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FloatingDock } from "@/components/ui/floating-dock"; import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";


export default function Home() {
  const words = ["backend", ".NET", "C#", "Blazor", "mobile", "web", "student"];

  return (
    <div>
      {/* Hero and Languages Section filling one viewport */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-grow flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-95 text-neutral-300">
            Hi! I&apos;m Tamas a <FlipWords words={words} /> <br />
            developer from Hungary
          </div>
        </div>
        {/* Languages Section */}
        <div className="flex flex-col items-center justify-center pb-12">
          <h2 className="text-1xl font-semibold text-neutral-100 text-neutral-200">
            Languages and frameworks I mainly use
          </h2>
          <div className="mt-4 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={techstack} direction="right" speed="slow" />
          </div>
        </div>
      </div>

      {/* Projects Section - Requires scrolling to reach */}
      <div className="pt-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-1xl font-semibold text-neutral-100 text-neutral-200">
            Projects I&apos;m proud of
          </h2>
        </div>
        <div className="px-8 flex flex-col items-center justify-center py-6">
          <div className="w-full max-w-5xl">
            <ul className="mx-auto grid grid-cols-1 gap-4
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-6
      justify-items-stretch">

              <GridItem
                area="md:[grid-area:1/1/2/4] lg:[grid-area:1/1/2/5]"
                title="TablóKereső"
                description="I built this application for my school. It has 35 years' worth of high school graduation photos. I used Blazor and Entity Framework Core for this project."
                gif="/tablokereso.gif"
                href="https://krgtablok.runasp.net"
              />

              <GridItem
                area="md:[grid-area:2/1/3/4] lg:[grid-area:2/1/3/5]"
                title="devRoot"
                description="I developed the devRoot project with my teammates as part of the Dusza Árpád National Programming Workshop. I was responsible for backend development and automatic deployment using ASP.NET Core and Ansible."
                gif="/devroot.gif"
                href="https://devroot.hu"
              />

              <GridItem
                area="md:[grid-area:3/1/4/4] lg:[grid-area:1/5/3/7]"
                title="MozdonyNavigator"
                description="I developed my MozdonyNavigator application as a personal alternative to the Hungarian State Railways (MÁV) app. I plan to release it publicly in the future. Initially, I built the project using .NET MAUI with a Hybrid Blazor solution. Currently, I am in the process of rewriting it using Avalonia UI."
                gif="/mozdonynavigator.png"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[10rem] w-full">
        <FloatingDock
          items={links}
        />
      </div>
    </div>
  );
}

const techstack = [
  { name: ".NET Framework", image: "dotnet.svg", alt: ".NET Framework" },
  { name: "ASP .NET", image: "aspnetcore.svg", alt: "ASP .NET Core REST API" },
  { name: "Blazor", image: "blazor.svg", alt: "Blazor" },
  { name: "Xamarin", image: "xamarin.svg", alt: "Xamarin" },
  { name: ".NET MAUI", image: "maui.svg", alt: ".NET MAUI" },
  { name: "Avalonia UI", image: "/avalonia.png", alt: "Avalonia UI" },
  { name: "Microsoft SQL Server", image: "mssql.svg", alt: "Microsoft SQL Server" },
  { name: "PostgreSQL", image: "postgresql.svg", alt: "PostgreSQL" },
  { name: "Firebase", image: "firebase.svg", alt: "Google Firebase" },
  { name: "Ansible", image: "ansible.svg", alt: "Ansible" },
  { name: "Bash", image: "bash.svg", alt: "Bash scripting" },
  { name: "PowerShell", image: "powershell.svg", alt: "PowerShell scripting" },
  { name: "Docker", image: "docker.svg", alt: "Docker" },
];



interface GridItemProps {
  area: string;
  title: string;
  description: React.ReactNode;
  gif?: string;
  href?: string | null;
}
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/tam%C3%A1s-solymosi-043314209",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/EgyipTomiCreations",
  },
  {
    title: "Email",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:solymositamas07@gmail.com",
  },
];

const GridItem = ({ area, title, description, gif, href }: GridItemProps) => {
  const renderTitle = (): React.ReactNode => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          {title}
          <FiExternalLink className="ml-2" />
        </a>
      );
    }
    return <span>{title}</span>;
  };

  return (
    <li className={`w-full list-none ${area}`}>
      <div className="relative flex flex-col h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-[rgba(40,40,40,0.80)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {gif && (
          <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
            <Image
              alt={title}
              src={gif}
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 justify-between gap-6 overflow-hidden p-6">
          <div className="space-y-3">
            <h3 className="pt-0.5 text-xl font-semibold md:text-2xl text-white">
              {renderTitle()}
            </h3>
            <p className="text-sm md:text-base text-black text-neutral-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
