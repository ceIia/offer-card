"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, ChevronDown, Copy } from "lucide-react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Card as OfferCard } from "@/components/card";

type TariffType = "fixed_price" | "indexed_price" | "variable_price" | "other";
type InvoiceType = "digital" | "paper";

interface OfferData {
  provider: {
    id: string;
    name: string;
    logo: {
      url: string;
      alt: string;
    };
    reviewsScore?: number;
  };
  tariffType?: TariffType;
  pricing: {
    yearlyBase: number;
    kwh: number;
    estimatedYearlyPrice: number;
  };
  greenEnergy: boolean;
  metadata: {
    invoiceType?: InvoiceType;
    activationTimeDays?: number;
    environmentalImpact?: string;
  };
}

type ProviderField = keyof OfferData["provider"];
type PricingField = keyof OfferData["pricing"];
type MetadataField = keyof OfferData["metadata"];

function CodePreview({
  code,
  language,
}: {
  code: string;
  language: "markup" | "json";
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-4 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy code"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="text-sm rounded-md p-4 overflow-auto" style={style}>
            {tokens.map((line, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

function FormSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <h2 className="font-semibold text-lg">{title}</h2>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">{children}</CollapsibleContent>
    </Collapsible>
  );
}

export default function ToolPage() {
  const [data, setData] = useState<OfferData>({
    provider: {
      id: "",
      name: "",
      logo: {
        url: "",
        alt: "",
      },
    },
    pricing: {
      yearlyBase: 0,
      kwh: 0,
      estimatedYearlyPrice: 0,
    },
    greenEnergy: false,
    metadata: {},
  });

  const updateProvider = (field: ProviderField, value: string | number) => {
    setData((prev) => ({
      ...prev,
      provider: {
        ...prev.provider,
        [field]:
          field === "logo"
            ? { url: value as string, alt: `${prev.provider.name} logo` }
            : value,
      },
    }));
  };

  const updatePricing = (field: PricingField, value: number) => {
    setData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [field]: value,
      },
    }));
  };

  const updateMetadata = (field: MetadataField, value: string | number) => {
    setData((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        [field]: value,
      },
    }));
  };

  const getHtmlPreview = () => {
    return `<ppn-offer language="fr-FR" currency="EUR">
  <script type="application/json">
    ${JSON.stringify(data, null, 4)}
  </script>
</ppn-offer>`;
  };

  return (
    <main className="container mx-auto pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Left column - Configuration form */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-8">
                {/* Provider Information */}
                <FormSection title="Provider Information">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Provider ID</Label>
                      <Input
                        placeholder="e.g. engie"
                        value={data.provider.id}
                        onChange={(e) => updateProvider("id", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Provider Name</Label>
                      <Input
                        placeholder="e.g. Engie"
                        value={data.provider.name}
                        onChange={(e) => updateProvider("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Logo URL</Label>
                      <Input
                        placeholder="https://..."
                        value={data.provider.logo.url}
                        onChange={(e) => updateProvider("logo", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Review Score</Label>
                      <Input
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        placeholder="e.g. 4.5"
                        value={data.provider.reviewsScore || ""}
                        onChange={(e) =>
                          updateProvider(
                            "reviewsScore",
                            Number.parseFloat(e.target.value)
                          )
                        }
                      />
                    </div>
                  </div>
                </FormSection>

                {/* Offer Details */}
                <FormSection title="Offer Details">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Tariff Type</Label>
                      <Select
                        value={data.tariffType}
                        onValueChange={(value: TariffType) =>
                          setData((prev) => ({
                            ...prev,
                            tariffType: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select tariff type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed_price">
                            Fixed Price
                          </SelectItem>
                          <SelectItem value="indexed_price">
                            Indexed Price
                          </SelectItem>
                          <SelectItem value="variable_price">
                            Variable Price
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Yearly Base Price</Label>
                      <Input
                        type="number"
                        placeholder="e.g. 120"
                        value={data.pricing.yearlyBase || ""}
                        onChange={(e) =>
                          updatePricing(
                            "yearlyBase",
                            Number.parseFloat(e.target.value)
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Price per kWh</Label>
                      <Input
                        type="number"
                        step="0.001"
                        placeholder="e.g. 0.158"
                        value={data.pricing.kwh || ""}
                        onChange={(e) =>
                          updatePricing(
                            "kwh",
                            Number.parseFloat(e.target.value)
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Estimated Yearly Price</Label>
                      <Input
                        type="number"
                        placeholder="e.g. 1200"
                        value={data.pricing.estimatedYearlyPrice || ""}
                        onChange={(e) =>
                          updatePricing(
                            "estimatedYearlyPrice",
                            Number.parseFloat(e.target.value)
                          )
                        }
                      />
                    </div>
                  </div>
                </FormSection>

                {/* Additional Information */}
                <FormSection title="Additional Information">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Green Energy</Label>
                      <Switch
                        checked={data.greenEnergy}
                        onCheckedChange={(checked) =>
                          setData((prev) => ({ ...prev, greenEnergy: checked }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Invoice Type</Label>
                      <Select
                        value={data.metadata.invoiceType}
                        onValueChange={(value) =>
                          updateMetadata("invoiceType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select invoice type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital">Digital</SelectItem>
                          <SelectItem value="paper">Paper</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Activation Time (days)</Label>
                      <Input
                        type="number"
                        placeholder="e.g. 7"
                        value={data.metadata.activationTimeDays || ""}
                        onChange={(e) =>
                          updateMetadata(
                            "activationTimeDays",
                            Number.parseInt(e.target.value)
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Environmental Impact</Label>
                      <Input
                        placeholder="e.g. Low CO2 emissions"
                        value={data.metadata.environmentalImpact || ""}
                        onChange={(e) =>
                          updateMetadata("environmentalImpact", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </FormSection>
              </div>
            </Card>
          </div>

          {/* Right column - Preview */}
          <div className="space-y-6 sticky top-6">
            <OfferCard
              offer={{
                id: 1,
                name: "Engie",
                provider: "engie",
              }}
              pricingDetails={{
                displayEnergyBase: true,
                displayPeople: true,
                displayConsumption: true,
              }}
            />

            <Card className="flex-1">
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="html" className="flex-1">
                    HTML
                  </TabsTrigger>
                  <TabsTrigger value="json" className="flex-1">
                    JSON
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="html" className="p-4">
                  <CodePreview code={getHtmlPreview()} language="markup" />
                </TabsContent>
                <TabsContent value="json" className="p-4">
                  <CodePreview
                    code={JSON.stringify(data, null, 2)}
                    language="json"
                  />
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
