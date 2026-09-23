"use client";

import { useState } from "react";
import type { Dict } from "@/lib/dictionaries";
import { payment } from "@/lib/content";
import { CopyField } from "./copy-field";
import { Dialog } from "./ui/dialog";

export function CoffeeModal({ dict }: { dict: Dict }) {
  const [open, setOpen] = useState(false);
  const m = dict.coffee.modal;

  const fields = [
    { key: "iban", label: m.ibanLabel, ...payment.iban },
    { key: "card", label: m.cardLabel, ...payment.card },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="coffee__button button button--brand mt-8 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {dict.coffee.button}
      </button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        className="coffee-modal"
        closeLabel={dict.ui.close}
        title={m.title}
        description={m.description}
      >
        <div className="coffee-modal__fields space-y-4">
          {fields.map((f) => (
            <CopyField
              key={f.key}
              label={f.label}
              display={f.display}
              value={f.raw}
              hint={m.bank}
              copyLabel={dict.ui.copy}
              copiedLabel={dict.ui.copied}
              copyAria={dict.ui.copyAria.replace("{label}", f.label)}
              copiedAria={dict.ui.copiedAria.replace("{label}", f.label)}
            />
          ))}
        </div>
        <p className="coffee-modal__note mt-4 text-xs leading-relaxed text-muted-foreground">
          {m.note}
        </p>
      </Dialog>
    </>
  );
}
