"use client";
import Image from "next/image";
import Headers from "../components/headers";
import { useEffect, useState } from "react";
import { parseThumbnail } from "../utils/parser";
import Footer from "../components/footer";

type Items = {
    title: string;
    thumbnail: string;
    date: string;
    link: string;
    categories: string[];
}

export default function Page() {
    const [items, setItems] = useState<Items[]>([]);

    const getData = async () => {
        const resp = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nasriadzlani");
        const data = await resp.json();
        console.log("data", data);
        for (let i = 0; i < data.items.length; i++) {
            setItems((prev) => [...prev, {
                title: data.items[i].title,
                thumbnail: parseThumbnail(data.items[i].description),
                date: data.items[i].pubDate,
                link: data.items[i].link,
                categories: data.items[i].categories
            }]);
        }
    }

    useEffect(() => {
        console.log("items", items);
        getData();
    }, [])

    return <div className="">
        <Headers />
        <div className="flex flex-col font-josefin mt-52 justify-center items-center gap-2">
            <span className="text-white">The blog</span>
            <span className="text-primary md:text-5xl text-xl">Writing from me</span>
            <span className="text-neutral-200 text-wrap text-center">The latest research about technology and resource.</span>
        </div>
        {
            items.length == 0 && <div className="w-screen flex justify-center">
                <div className="w-1/3 h-10 bg-neutral-900 rounded-xl animate-pulse"></div>
            </div>
        }
        {
            items.length != 0 && <div className="md:p-20 p-0 bg-neutral-900 mt-20">
                <a href={items[0].link}>
                    <div className="flex flex-col md:flex-row gap-4 p-10">
                        <div className="md:w-6/12 w-full bg-white h-auto rounded-xl flex justify-center items-center p-5">
                            <Image alt="head" src={items[0].thumbnail}
                                width={900}
                                height={1200}
                                className="object-cover bg-white rounded-xl"
                            />
                        </div>
                        <div className="md:w-6/12 w-full md:pr-0 pr-0 flex gap-2 flex-col justify-between">
                            <div className="flex flex-col gap-5">
                                <span className="border border-primary bg-black text-primary rounded-xl px-5 py- w-max">{items[0].date}</span>
                                <span className="text-white font-bold text-3xl text-wrap font-josefin">{items[0].title}</span>
                            </div>
                            <div className="">
                                <span className="flex flex-wrap gap-2">
                                    {items[0].categories.map((category, index) => {
                                        return <span key={index} className="text-primary bg-black px-4 py-2 rounded-xl mr-2">{category}</span>
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        }
        <div className="pt-10 ms-5">
            <span className="text-primary font-josefin text-xl">
                Other Articles
            </span>
        </div>
        <div className="flex flex-wrap gap-2 mx-5">
            {
                items.slice(1, ).map((item, index) => {
                    return <div key={index} className="md:p-10 md:w-[calc(33.3333%_-_8px)] w-full p-0 bg-neutral-900 mt-5 rounded-xl">
                        <a href={item.link}>
                            <div className="flex flex-col gap-4 p-10">
                                <div className="w-full bg-white md:h-64 rounded-xl flex justify-center items-center p-5">
                                    <Image alt="head" src={item.thumbnail}
                                        width={900}
                                        height={1200}
                                        className="object-contain rounded-xl h-60"
                                    />
                                </div>
                                <div className="w-full md:pr-0 pr-0 flex gap-2 flex-col justify-between h-auto">
                                    <div className="flex flex-col gap-5">
                                        <span className="border border-primary bg-black text-primary rounded-xl px-5 py- w-max">{item.date}</span>
                                        <span className="text-white font-bold text-xl text-wrap font-josefin">{item.title}</span>
                                    </div>
                                    <div className="">
                                        <span className="flex flex-wrap gap-2">
                                            {item.categories.slice(0,2).map((category, index) => {
                                                return <span key={index} className="text-primary bg-black px-4 py-2 rounded-xl mr-2">{category}</span>
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                })
            }
        </div>
        {
            items.length != 0 && <div className="w-screen flex justify-center">
                <a href="https://nasriadzlani.medium.com/" className="text-primary border border-primary bg-neutral-900 rounded-xl px-10 py-4 my-10">
                    Read More
                </a>
            </div>
        }
        <div className="mt-5"></div>
        <Footer />
    </div>;
}