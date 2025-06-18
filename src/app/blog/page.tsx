import Card from "./components/Card";
import MultiSlider from "../components/MultiSlider";
import { Blog } from "@/types/interfaces";

function page() {
  const blogs: Blog[] = [
    {
      id: 1,
      category: "cat1",
      comments: [
        {
          date: "",
          sender: "",
          text: "",
        },
      ],
      author: "تولید محتوا",
      text: "",
      title: "title1",
      date: "",
      likeNum: 1,
      readTime: 12,
    },
    {
      id: 2,
      category: "cat2",
      comments: [
        {
          date: "",
          sender: "",
          text: "",
        },
      ],
      author: "تولید محتوا",
      text: "",
      title: "title2",
      date: "",
      likeNum: 1,
      readTime: 12,
    },
    {
      id: 3,
      category: "cat3",
      comments: [
        {
          date: "",
          sender: "",
          text: "",
        },
      ],
      author: "تولید محتوا",
      text: "",
      title: "title3",
      date: "",
      likeNum: 1,
      readTime: 12,
    },
    {
      id: 4,
      category: "cat4",
      comments: [
        {
          date: "",
          sender: "",
          text: "",
        },
      ],
      author: "تولید محتوا",
      text: "",
      title: "title4",
      date: "",
      likeNum: 1,
      readTime: 12,
    },
    {
      id: 5,
      category: "cat5",
      comments: [
        {
          date: "",
          sender: "",
          text: "",
        },
      ],
      author: "تولید محتوا",
      text: "",
      title: "title5",
      date: "",
      likeNum: 1,
      readTime: 12,
    },
  ];
  return (
    <>
      <div className="px-30">
        <MultiSlider />
        <div className="rounded-sm border border-white p-5 pb-2 bg-[#162A34]">
          <div className="flex justify-between items-center">
            <ul className="flex list-none gap-5">
              <li>همه</li>
              <li>آموزشی</li>
              <li>تکنولوژی</li>
              <li>رویدادها</li>
              <li>نمایشگاه ها</li>
            </ul>
            <div className="flex gap-5">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="جست و جو"
                className="px-7 py-2 bg-white rounded-sm w-75 placeholder:text-gray-400"
              />
              <button>تاریخ</button>
            </div>
          </div>
          <span className="mt-2 block text-sm">
            4 مقاله در دسته بندی{" "}
            <span className="text-[#398DED]"> آموزشی </span>
            منتشر شده. |
          </span>
        </div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-5 mt-5">
          {blogs.map((blog) => (
            <Card key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
