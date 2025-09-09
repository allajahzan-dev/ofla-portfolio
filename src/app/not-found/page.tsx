import CustomNotFound from "@/components/common/CustomNotFound";

// Generate meta data
export async function generateMetadata() {
    return {
        title: "Page not found - OFLA",
        description: `Premium Dubai-based office workspace furniture company offering 
        ergonomic chairs, tables, longues, pods, lockers, storage 
        and modern office solutions.`,
    };
}

// Not found
export default function NotFound() {
    return <CustomNotFound />;
}
