import {
  BlogPagination,
  BlogList,
  BlogCategory,
  BlogSearch,
} from "@/components/blog";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  return (
    <section className="container mx-auto px-4 py-10 lg:py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white hover:underline" href="/">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Danh sách bài viết</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-4 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        {/* blog list */}
        <section className="flex-1">
          <h1 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Danh sách bài viết
          </h1>

          <div className="space-y-6">
            <BlogSearch />
            <BlogList />
            <BlogPagination />
          </div>
        </section>

        <BlogCategory />
      </div>
    </section>
  );
};

export default page;
