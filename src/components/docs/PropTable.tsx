import type { PropDoc } from "@/components/docs/types";

export function PropTable({ props }: { props: PropDoc[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-bunker-425">Prop</th>
            <th className="px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-bunker-425">Type</th>
            <th className="px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-bunker-425">Required</th>
            <th className="px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-bunker-425">Default</th>
            <th className="px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-bunker-425">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="align-top border-t border-bunker-100/70">
              <td className="px-3 py-2 font-mono text-xs text-bunker-675">{prop.name}</td>
              <td className="px-3 py-2 font-mono text-xs text-bunker-675">{prop.type}</td>
              <td className="px-3 py-2 font-sans text-xs text-bunker-550">{prop.required ? "Yes" : "No"}</td>
              <td className="px-3 py-2 font-mono text-xs text-bunker-550">{prop.defaultValue ?? "-"}</td>
              <td className="px-3 py-2 font-sans text-xs leading-[1.45] text-bunker-550">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
