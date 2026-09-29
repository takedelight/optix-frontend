import type { Metadata } from "next";
import type { ComponentProps } from "react";

import { RiApps2Line, RiCloudLine, RiImageEditLine, RiUploadCloud2Line } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggleEntry } from "@/features/theme-toggle";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui";

export const metadata: Metadata = {
  description:
    "Optix is a lightweight media and asset service for developers: S3-compatible storage and on-the-fly image transforms without the MinIO or AWS boilerplate.",
};

const features = [
  {
    icon: RiUploadCloud2Line,
    title: "Presigned Uploads",
    description:
      "Fast file uploads straight from your clients through signed URLs — no proxying bytes through your server.",
  },
  {
    icon: RiImageEditLine,
    title: "Real-time Transforms",
    description:
      "Automatic optimization, cropping, and format conversion on the fly, including WebP and AVIF.",
  },
  {
    icon: RiCloudLine,
    title: "Zero Boilerplate",
    description:
      "All the power of S3-compatible storage without standing up MinIO or wiring up the heavy AWS S3 SDK.",
  },
  {
    icon: RiApps2Line,
    title: "Laconic Dashboard",
    description:
      "Manage buckets, integrations, and global API keys from a single, clean dashboard.",
  },
];

function LinkButton({
  href,
  children,
  ...props
}: { href: string } & ComponentProps<typeof Button>) {
  return (
    <Button render={<Link href={href} />} nativeButton={false} {...props}>
      {children}
    </Button>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.svg" alt="Optix" width={24} height={24} />
            Optix
          </Link>

          <div className="flex items-center gap-1.5">
            <ThemeToggleEntry />
            <LinkButton href="/app">Open Dashboard</LinkButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
            Image processing gateway
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Store, transform, and serve images without the heavy lifting
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Optix is a lightweight media and asset service for developers — S3-compatible storage
            combined with on-the-fly image transformation. Skip the heavy MinIO deployment and the
            bulky AWS S3 boilerplate.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <LinkButton href="/app" size="lg">
              Get Started
            </LinkButton>
            <LinkButton href="#features" size="lg" variant="outline">
              Learn More
            </LinkButton>
          </div>
        </section>

        <section
          id="features"
          className="border-t bg-muted/30 py-20"
          aria-labelledby="features-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 id="features-heading" className="text-3xl font-semibold tracking-tight">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              From upload to delivery in one small service — built for pet-projects and production
              alike.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <span className="mb-2 grid size-9 place-items-center rounded-lg border text-muted-foreground">
                      <feature.icon className="size-4" aria-hidden="true" />
                    </span>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="relative overflow-hidden">
              <CardHeader className="items-center text-center">
                <CardTitle className="text-2xl">Ready to drop the storage boilerplate?</CardTitle>
                <CardDescription className="max-w-xl">
                  Spin up Optix and ship your first presigned upload in minutes — no MinIO, no AWS
                  setup.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <LinkButton href="/app" size="lg">
                  Open Dashboard
                </LinkButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <span>© 2026 Optix. Lightweight media storage for developers.</span>
          <span className="flex items-center gap-3">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <Link href="/app" className="hover:text-foreground">
              Dashboard
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
