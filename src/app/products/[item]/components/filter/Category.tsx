import { IProduct } from "@/app/products/utils/fetchProducts";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import {
    TCategory,
    TSubCategory,
} from "@/app/products/[item]/utils/fetchItemImages";

// Interface for Props
interface Props {
    product: IProduct | undefined;
    category: TCategory;
    setCategory: Dispatch<SetStateAction<TCategory>>;
    subCategory: TSubCategory;
    setSubCategory: Dispatch<SetStateAction<TSubCategory>>;
    toggleCategoryMenu: boolean;
    SetToggleCategoryMenu: Dispatch<SetStateAction<boolean>>;
}

// Category
export default function Category({
    product,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    toggleCategoryMenu,
    SetToggleCategoryMenu,
}: Props) {
    return (
        <>
            {/* On desktop */}
            {product && Object.keys(product.categories).length > 0 && (
                <div
                    className="col-span-3 relative w-full pt-0 hidden flex-col items-center justify-center
                    lg:flex"
                >
                    <div className="flex gap-5 items-center justify-center">
                        {/* Categories */}
                        {Object.keys(product.categories).map(
                            (cat: string, catIndex: number) => (
                                <div key={catIndex} className="relative flex flex-col">
                                    <button
                                        onClick={() => {
                                            setCategory(cat as TCategory);
                                            setSubCategory("All");
                                        }}
                                        className={cn(
                                            "group p-1 px-5 rounded-full cursor-pointer",
                                            cat === category && "bg-[#171717] text-white"
                                        )}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ amount: 0.2, once: true }}
                                            transition={{
                                                duration: 0.2,
                                                delay: 0.2 + catIndex * 0.1,
                                            }}
                                            className="flex items-center gap-2 text-base font-semibold will-change-transform"
                                        >
                                            <span>{cat}</span>

                                            {/* Icon */}
                                            {product.categories[cat as TCategory].length > 0 &&
                                                (cat === category ? (
                                                    <ChevronDown className="w-4 h-4" />
                                                ) : (
                                                    <ChevronUp className="w-4 h-4" />
                                                ))}
                                        </motion.span>
                                    </button>

                                    {/* Sub categories */}
                                    {cat === category && (
                                        <div className="absolute left-0 top-16">
                                            <div className="flex gap-5 items-center justify-center">
                                                {product.categories[cat as TCategory].map(
                                                    (subCat, subIndex) => (
                                                        <button
                                                            key={subIndex}
                                                            onClick={() =>
                                                                setSubCategory(subCat as TSubCategory)
                                                            }
                                                            className={cn(
                                                                "group p-1 px-5 rounded-full cursor-pointer",
                                                                subCat === subCategory &&
                                                                "bg-[#171717] text-white"
                                                            )}
                                                        >
                                                            <motion.span
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ amount: 0.2, once: true }}
                                                                transition={{
                                                                    duration: 0.2,
                                                                    delay: 0.2 + subIndex * 0.1,
                                                                }}
                                                                className="flex items-center gap-2 text-base font-semibold will-change-transform"
                                                            >
                                                                <span>{subCat}</span>
                                                            </motion.span>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* Categories on mobile */}
            {product && Object.keys(product.categories).length > 0 && (
                <div
                    className="col-span-3 relative w-full pt-0 flex flex-col items-start justify-between
                    lg:hidden"
                >
                    {/* Selected category */}
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            SetToggleCategoryMenu(!toggleCategoryMenu);
                        }}
                        className="p-0 flex items-center gap-2 cursor-pointer"
                    >
                        {toggleCategoryMenu ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                        <span className="text-lg font-semibold">
                            {category}
                        </span>
                    </div>

                    {/* List of categories */}
                    <div
                        className={cn(
                            "relative z-50 left-0 top-5 w-full shadow-[0_0_10px_0_rgba(0,0,0,0)] rounded-lg overflow-hidden",
                            toggleCategoryMenu ? "block" : "hidden"
                        )}
                    >
                        <div
                            className="flex flex-col gap-0 p-0 bg-white text-base font-semibold
                            sm:font-medium"
                        >
                            {Object.keys(product.categories).map((item, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCategory(item as TCategory);
                                    }}
                                    className="p-2 flex items-center justify-between text-start hover:bg-zinc-100 rounded-md cursor-pointer"
                                >
                                    {item}
                                    {category === item && <Check className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
