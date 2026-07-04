import { products } from "@/lib/products";

export function OrbitRings() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {products.map((p) => (
        <circle
          key={p.id}
          cx="50"
          cy="50"
          r={p.orbit.radius}
          fill="none"
          stroke={p.colors.primary}
          strokeOpacity={0.12}
          strokeWidth={0.3}
          strokeDasharray="0.6 1.4"
        />
      ))}
    </svg>
  );
}
