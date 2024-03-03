import TabLayout from "@/components/TabLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:gap-32 my-4 mb-20 ">
      <TabLayout>{children}</TabLayout>
    </div>
  );
};

export default Layout;
