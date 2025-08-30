"use client";

import { notFound, useParams } from "next/navigation";
import { componentsMetadata } from "@/lib/component-meta";
import { ComponentPreview } from "@/components/component-preview";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/card/card";
import { useTranslation } from "@/context/app-context";
import { CodeBlock } from "@/components/code-block";
import { Alert } from "@/app/the-actual-components/alert/alert";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import useIsRTL from "@/hooks/useIsRTL";
import { ComponentInscription } from "./ComponentInscription";

export default function ComponentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslation();
  const isRTL = useIsRTL();

  const component = componentsMetadata.find((c) => c.id === slug);
  if (!component) {
    notFound();
  }

  const DemoComponent = component.demoFullPage;

  const alertVariant =
    component.id === "slider-hero-section" ||
    component.id === "inflected-card" ||
    component.id === "circular-testimonials"
      ? "default"
      : "destructive";

  return (
    <div className="space-y-12 pb-12 pt-8" dir={isRTL ? "rtl" : "ltr"}>
      {/* HEADER */}
      <header className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-4xl font-bold font-headline tracking-tighter">
            {t(component.title)}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground w-full">
            {t(component.description)}
          </p>
        </div>
      </header>

      {/* DISCLAIMER */}
      {component.disclaimer && (
        <Alert
          isRTL={isRTL}
          icon={
            <AlertTriangle
              className={cn("h-4 w-4", alertVariant === "default" ? "text-foreground" : "")}
              style={isRTL ? { transform: "rotateY(180deg)" } : undefined}
            />
          }
          title={t("disclaimer")}
          description={<span className="text-foreground/90">{t(component.disclaimer)}</span>}
          borderRadius="var(--radius)"
          borderColor="hsl(var(--border))"
          titleColor="hsl(var(--foreground))"
        />
      )}

      {/* ⚡ Inscriptions always just below disclaimer */}
      <ComponentInscription componentId={component.id} />

      {/* PREVIEW & CODE */}
      <div className="space-y-6">
        <ComponentPreview
          demo={<DemoComponent />}
          componentCode={component.code}
          componentCodeFilename={`${component.id}.tsx`}
          noPadding={component.noPadding}
        />
      </div>

      {/* PROPS */}
      {component.props.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{t("props")}</h2>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className={cn(isRTL && "text-right")}>{t("prop")}</TableHead>
                  <TableHead className={cn(isRTL && "text-right")}>{t("type")}</TableHead>
                  <TableHead className={cn(isRTL && "text-right")}>{t("default")}</TableHead>
                  <TableHead>{t("required")}</TableHead>
                  <TableHead className={cn("w-[40%]", isRTL && "text-right")}>
                    {t("description")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {component.props.map((prop) => (
                  <TableRow key={prop.name}>
                    <TableCell>
                      <code className="font-mono text-accent">{prop.name}</code>
                    </TableCell>
                    <TableCell style={{ direction: "ltr" }} className={cn(isRTL && "text-right")}>
                      <code className="font-mono text-sm text-muted-foreground">{prop.type}</code>
                    </TableCell>
                    <TableCell style={{ direction: "ltr" }} className={cn(isRTL && "text-right")}>
                      {prop.defaultValue ? (
                        <Badge variant="secondary">{prop.defaultValue}</Badge>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      {prop.required ? (
                        <Badge variant="outline">Yes</Badge>
                      ) : (
                        <Badge variant="secondary">No</Badge>
                      )}
                    </TableCell>
                    <TableCell>{t(prop.description)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      )}

      {/* USAGE */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">{t("usage")}</h2>
        <CodeBlock code={component.usage} filename="usage.tsx" />
      </div>

      {/* DEPENDENCIES */}
      {component.dependencies && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{t("dependencies")}</h2>
          <Card>
            <CardContent className="pt-6">
              <p
                style={{ direction: "ltr" }}
                className={cn(
                  "text-sm text-muted-foreground whitespace-pre-wrap font-mono",
                  isRTL && "text-right"
                )}
                dangerouslySetInnerHTML={{
                  __html: component.dependencies.replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>'
                  ),
                }}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* CREDIT */}
      {component.credit && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{t("credit")}</h2>
          <Card>
            <CardContent className="pt-6">
              <p
                style={{ direction: "ltr" }}
                className={cn("text-sm text-muted-foreground whitespace-pre-wrap", isRTL && "text-right")}
                dangerouslySetInnerHTML={{
                  __html: component.credit
                    .replace(/\n/g, "<br />")
                    .replace(
                      /\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>'
                    ),
                }}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
