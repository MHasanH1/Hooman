function page() {
  return (
    <>
      <div className="px-15 py-8 text-black">
        <div className="bg-white px-3 py-3">
          <div className="px-15 py-8">
            <div className="flex gap-2 text-sm">
              {/* <img src="" alt="" /> */}
              <span>
                تیم author در{" "}
                <span className="text-[var(--primary)]">category</span>
              </span>
            </div>
            <h5 className="my-6 text-2xl">title</h5>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="border-l pl-2">
                  زمان خواندن readTime دقیقه
                </span>
                <span>4 ساعت پیش</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  {/* <img src="" alt="" /> */}
                  <span>likeNum</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <img src="" alt="" /> */}
                  <span>comments.length نظر</span>
                </div>
              </div>
            </div>
            {/* img actually */}
            <div className="w-full bg-gray-400 h-100 my-3"></div>
            <div>
              <h6 className="text-xl my-4">
                Lorem ipsum dolor sit amet consectetur.
              </h6>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                veritatis, sequi nihil ab numquam dolore itaque labore quisquam!
                Maxime consequuntur, voluptate rem in consectetur eveniet quasi
                eius omnis incidunt sit totam officia soluta animi repellendus
                vero. Perferendis, tenetur quam! Sed aut non debitis id
                similique mollitia fugit blanditiis totam corrupti in asperiores
                tempora quisquam cupiditate ab a, eligendi, atque dolor
                dignissimos magni et tenetur possimus voluptatum voluptas! Ipsa
                voluptas animi temporibus. Ut quidem vero, aut, tempore vel quod
                debitis voluptatum maxime fugit possimus magni temporibus
                deleniti sed saepe hic repellat libero dolores. Repudiandae,
                eligendi fugit commodi sunt reprehenderit necessitatibus ipsum.
              </p>
              <h6 className="text-xl my-4">
                Lorem ipsum dolor sit amet consectetur.
              </h6>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                tempore illum incidunt architecto numquam magnam perspiciatis
                autem soluta corporis perferendis est magni expedita eius quae
                itaque, aliquam, officiis quod, cumque iusto labore odio ad vel
                possimus sed. Aspernatur hic ipsam odit rerum voluptatem itaque
                quod corporis, excepturi quibusdam temporibus vel illo assumenda
                laboriosam, dicta optio ab natus nulla porro culpa! Ipsam
                deserunt quae totam molestias tempora. Facere id ut impedit
                molestiae quis autem? Quidem aliquam illo cumque dolores
                repellat dolorem repudiandae officiis molestias doloremque non
                temporibus sed eius exercitationem vel, saepe tempore, expedita,
                blanditiis rem quia ad? Esse delectus praesentium optio minus
                quod velit repellendus dolor maxime sed? Corporis enim ex ea
                qui, a doloremque provident? Dolor magnam incidunt aliquid?
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center gap-2 text-xs">
                <div className="size-6 p-4 bg-gray-200 rounded-full text-xs flex items-center justify-center">
                  A.A
                </div>
                <span className="text-gray-500">مولف: </span>
                <span>author</span>
              </div>
              <span className="text-xs text-gray-500">date</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1">
              {/* <img src="" alt="" /> */}
              <span className="text-gray-500">قبلی</span>
            </div>
            <div className="flex items-center gap-1">
              {/* <img src="" alt="" /> */}
              <span className="text-gray-500">بعدی</span>
            </div>
          </div>
        </div>
        <div className="bg-white my-5 py-2">
          <div className="px-15 pb-2 border-b border-gray-200">
            <div>
              <div className="flex items-center gap-2 font-bold mb-2">
                {/* <img src="" alt="" /> */}
                <span>نظرها</span>
              </div>
              <span className="text-sm">
                دیدگاه خود را با ما درمیان بگذارید یا اگر سوالی دارید از ما
                بپرسید
              </span>
            </div>
            <div className="relative">
              <button className="absolute">
                {/* <img src="" alt="" /> */}
              </button>
              <input
                type="text"
                className="w-full px-10 py-1.5 border rounded border-gray-200 my-5"
                placeholder="نظر خود را اینجا بنویسید"
              />
              <button className="absolute">
                {/* <img src="" alt="" /> */}
              </button>
            </div>
          </div>
          <div className="px-15 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">comments.length نظر</span>
              <button>dropdown</button>
            </div>
            <div className="border border-gray-200">
              {/* comments.map */}
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-8 p-5 flex justify-center items-center rounded-full bg-gray-200">
                    A.A
                  </div>
                  <div>
                    <span className="block">comment.sender</span>
                    <span className="block text-xs text-gray-500">
                      comment.date
                    </span>
                  </div>
                </div>
                <p>comment.text</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-1 text-xs mt-3 text-gray-500">
                    {/* <img src="" alt="" /> */}
                    <span>پاسخ</span>
                  </button>
                  <button>{/* <img src="" alt="" /> */}</button>
                </div>
              </div>
              <div className="relative p-4">
                <button className="absolute">
                  {/* <img src="" alt="" /> */}
                </button>
                <input
                  type="text"
                  className="w-full px-10 py-1.5 border rounded border-gray-200"
                  placeholder="نظر خود را اینجا بنویسید"
                />
                <button className="absolute">
                  {/* <img src="" alt="" /> */}
                </button>
              </div>
            </div>
          </div>
          <div className="text-center my-4 mb-2 text-gray-500">
            pagination buttons
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
