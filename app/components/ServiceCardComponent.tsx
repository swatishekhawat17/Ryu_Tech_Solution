import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  desc: string;
  hoverDesc: string;
  link?: string;
  width?: string;
  height?: string;
  image?: string | ReactNode;
}

export function ServiceCard({
  icon,
  title,
  desc,
  hoverDesc,
  link,
  width = "w-64",
  height = "h-44",
  image,
}: CardProps) {
  const hasImage = Boolean(image);

  // ✅ Changed `space-x-4` to `gap-4` so divider can stretch
  const layoutClasses = hasImage
    ? "flex-col sm:flex-row items-stretch gap-4 p-4"
    : "flex-col items-center justify-center p-6";

  return (
    <div
      className={`
        group
        relative
        border-3 border-brand-blue
        bg-white text-gray-800 
        flex ${layoutClasses}
        ${width}
        ${hasImage ? "h-auto items-stretch" : height}
        rounded-2xl shadow-md 
        transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl cursor-pointer
        hover:border-brand-purple
      `}
    >
      {/* Default (before hover) */}
      <div className="flex flex-1 items-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
        {/* LEFT SIDE — IMAGE */}
        {hasImage && (
          <div className="w-1/3 sm:1/4 h-full rounded-lg overflow-hidden hidden sm:flex">
            {typeof image === "string" ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              image
            )}
          </div>
        )}

        {/* ✅ DIVIDER (FIXED) */}
        {hasImage && (
          <div className="w-px h-full bg-gray-500 hidden sm:block" />
        )}

        {/* RIGHT SIDE — TEXT */}
        <div
          className={`
              ${hasImage ? "w-full sm:w-3/4" : "w-full"}
              flex flex-col
              text-center sm:text-left
              items-center sm:items-start
            `}
        >
          {/* MOBILE: Icon + title in one row */}
          <div className="flex sm:hidden items-center gap-2 mb-2">
            {icon && <span className="text-3xl text-gray-700">{icon}</span>}
            <h4 className="font-bold text-gray-800 text-xl">{title}</h4>
          </div>

          {/* DESKTOP: Title only */}
          <h4 className="hidden sm:block font-bold text-gray-800 text-xl mb-2">
            {title}
          </h4>
          <p className="text-gray-500 text-left text-m">{desc}</p>
        </div>
      </div>

      {/* Hover View */}
      <div
        className="
          absolute inset-0 
          opacity-0 group-hover:opacity-100 
          bg-brand-gradient-soft
          rounded-2xl p-4
          transition-opacity duration-300
          flex flex-col justify-center
        "
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{hoverDesc}</p>

        {link && (
          <a href={link} className="mt-3 text-sm font-bold hover:underline">
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
}
