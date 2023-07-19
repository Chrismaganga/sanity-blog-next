import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "shopify" },
    { name: "description", content: "CodeLovers" },
  ];
};
export default function Index() {
  return (
    <h1 className="text-3xl font-bold text-gray-700">
      CodeLovers!
    </h1>
  )
}