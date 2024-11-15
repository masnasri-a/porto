import Headers from "../components/headers";

export default function Page() {
    return <div className="">
        <Headers />
        <div className="flex flex-col font-josefin mt-52 justify-center items-center gap-2">
            <span className="text-white">The blog</span>
            <span className="text-primary md:text-5xl text-xl">Writing from me</span>
            <span className="text-neutral-200">The latest research about technology and resource.</span>
        </div>
        <div className="">
            
        </div>
    </div>;
  }