import Image from "next/image";
import Container from "./_component/Container";
import calender from "../assets/calendar.png";
import grafik from "../assets/Gambar Grafik.png";
import BarChart from "./_component/Chart";
import { supabase } from "@/utils/supabase";

export default async function Home() {
  const {data} = await supabase.from('students').select()
  return (
    <Container>
      <div className="flex justify-between mt-[20px] xl:mt-[35px]">

        <div className="flex gap-1 xl:gap-2 items-center text-kalender px-2 py-1 xl:px-[16px] xl:py-[9px] bg-white rounded border border-border">
          <Image src={calender} alt="calender" width={20} height={20} />
          <p className="text-[10px] md:text-base">Dec 29, 2023 - Jan 4, 2024</p>
        </div>

        <div className="flex gap-2 items-center text-kalender px-2 py-1 xl:px-[16px] xl:py-[9px] bg-white rounded border border-border">
          <p className="text-[10px] md:text-base">Daily</p>
        </div>
      </div>

      {/* bagian gaktu */}
      <div className="justify-between mt-[45px] flex">

        <div className="bg-white px-4 py-3 xl:px-[19px] xl:py-5 rounded-[5px] border border-border flex gap-[36px]">
          <div className="space-y-2 xl:space-y-[26px]">
            <h1 className="text-nama-lain font-bold text-[10px] xl:text-base">Total Students</h1>
            <h1 className="font-bold text-lg xl:text-2xl">{data?.length}</h1>
            <div className="flex gap-1 items-center">
                <svg className="hidden md:block" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z" fill="#00B69B"/>
                </svg>
                <p className="text-konten text-[10px] xl:text-base"><span className="text-persen">8.5%</span> Up from yesterday</p>
            </div>
          </div>

          <div className="hidden md:block">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0.232422 20V35C0.232422 37.7614 2.471 40 5.23242 40H20.2324H35.2324C37.9938 40 40.2324 37.7614 40.2324 35V20V5C40.2324 2.23858 37.9938 0 35.2324 0H20.2324H5.23242C2.471 0 0.232422 2.23858 0.232422 5V20Z" fill="#2758C1"/>
            <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M12.5435 14.4445C12.5435 16.8991 14.4451 18.8889 16.7909 18.8889C19.1367 18.8889 21.0384 16.8991 21.0384 14.4445C21.0384 11.9899 19.1367 10 16.7909 10C14.4451 10 12.5435 11.9899 12.5435 14.4445ZM23.162 18.89C23.162 20.7309 24.5883 22.2233 26.3476 22.2233C28.107 22.2233 29.5332 20.7309 29.5332 18.89C29.5332 17.049 28.107 15.5566 26.3476 15.5566C24.5883 15.5566 23.162 17.049 23.162 18.89Z" fill="#2758C1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7715 21.1111C11.758 21.1111 7.6447 23.8072 7.23311 29.1102C7.21069 29.3991 7.73863 30 8.00493 30H25.5461C26.3438 30 26.3562 29.3283 26.3438 29.1111C26.0326 23.6591 21.8556 21.1111 16.7715 21.1111ZM25.9203 23.3334C27.2533 25.1903 28.0433 27.4983 28.0436 29.9994H32.1381C32.7142 29.9994 32.7232 29.4957 32.7142 29.3328C32.4919 25.2882 29.5379 23.3745 25.9203 23.3334Z" fill="#2758C1"/>
            </svg>
          </div>

        </div>

        <div className="bg-white px-4 py-3 xl:px-[19px] xl:py-5 rounded-[5px] border border-border flex gap-[36px]">
          <div className="space-y-2 xl:space-y-[26px]">
            <h1 className="text-nama-lain font-bold text-[10px] xl:text-base">Total Certified Students</h1>
            <h1 className="font-bold text-lg xl:text-2xl">413</h1>
            <div className="flex gap-1 items-center">
                <svg className="hidden md:block" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z" fill="#00B69B"/>
                </svg>
                <p className="text-konten text-[10px] xl:text-base"><span className="text-persen">8.5%</span> Up from yesterday</p>
            </div>
          </div>

          <div className="hidden md:block">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 25V45C0 47.7614 2.23858 50 5 50H25H45C47.7614 50 50 47.7614 50 45V25V5C50 2.23858 47.7614 0 45 0H25H5C2.23858 0 0 2.23858 0 5V25Z" fill="#791229"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 20.2629L23.2504 26.4697C23.3662 26.5365 23.4876 26.5848 23.6111 26.6154V38.6531L13.2667 32.5313C12.7915 32.2501 12.5 31.7389 12.5 31.1866V20.2629ZM37.4998 20.0981V31.1868C37.4998 31.7391 37.2083 32.2503 36.7331 32.5315L26.3887 38.6533V26.5102C26.4139 26.4976 26.4389 26.4842 26.4636 26.4699L37.4998 20.0981Z" fill="#791229"/>
              <path opacity="0.499209" fill-rule="evenodd" clip-rule="evenodd" d="M12.8359 17.2509C12.9673 17.085 13.133 16.9449 13.3262 16.842L24.2637 11.0164C24.7229 10.7719 25.2736 10.7719 25.7328 11.0164L36.6703 16.842C36.8192 16.9213 36.9519 17.0228 37.065 17.1411L25.0732 24.0645C24.9943 24.1101 24.9216 24.1621 24.8554 24.2197C24.7891 24.1621 24.7164 24.1101 24.6376 24.0645L12.8359 17.2509Z" fill="#791229"/>
              </svg>
          </div>

        </div>

        <div className="bg-white px-4 py-3 xl:px-[19px] xl:py-5 rounded-[5px] border border-border flex gap-[36px]">
          <div className="space-y-2 xl:space-y-[26px]">
            <h1 className="text-nama-lain font-bold text-[10px] xl:text-base">Average Certification Score</h1>
            <h1 className="font-bold text-lg xl:text-2xl">84.62</h1>
            <div className="flex gap-1 items-center">
                <svg className="hidden md:block" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z" fill="#00B69B"/>
                </svg>
                <p className="text-konten text-[10px] xl:text-base"><span className="text-persen">8.5%</span> Up from yesterday</p>
            </div>
          </div>

          <div className="hidden md:block">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 20.064V35.064C0 37.8254 2.23858 40.064 5 40.064H20H35C37.7614 40.064 40 37.8254 40 35.064V20.064V5.06396C40 2.30254 37.7614 0.0639648 35 0.0639648H20H5C2.23858 0.0639648 0 2.30254 0 5.06396V20.064Z" fill="#4AD991"/>
              <path d="M12.742 27.3228H28.2976C28.8703 27.3228 29.3346 27.7871 29.3346 28.3599C29.3346 28.9326 28.8703 29.3969 28.2976 29.3969H11.705C11.1323 29.3969 10.668 28.9326 10.668 28.3599V11.7673C10.668 11.1945 11.1323 10.7302 11.705 10.7302C12.2777 10.7302 12.742 11.1945 12.742 11.7673V27.3228Z" fill="#4AD991"/>
              <path opacity="0.5" d="M16.61 22.847C16.2183 23.2648 15.562 23.286 15.1442 22.8942C14.7263 22.5025 14.7052 21.8462 15.0969 21.4284L18.9858 17.2803C19.3646 16.8762 19.9941 16.8411 20.4155 17.2007L23.4849 19.8199L27.4839 14.7543C27.8388 14.3048 28.491 14.2281 28.9405 14.583C29.39 14.9379 29.4667 15.59 29.1118 16.0395L24.4452 21.9506C24.0807 22.4124 23.4055 22.4788 22.9581 22.0969L19.822 19.4208L16.61 22.847Z" fill="#4AD991"/>
              </svg>
          </div>

        </div>
        
      </div>
      {/* akhir bagian gak tu */}

      {/* last part */}
      <div className="mt-[45px]">
        <BarChart />
      </div>
      {/* last part */}
    </Container>
  );
}
