import Image from 'next/image'
import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import L1 from './L1.png' 
import gbimg from './gbimg.png'  

export default function Home() {
      return (
        <>
 <div className="flex items-center justify-between w-full px-10 py-5">
  <div className="flex items-center space-x-3">
      <Image src={L1} alt="" width={32} height={32} />
        <h1 className="font-semibold text-[40px]">Evograph</h1>
      </div>
      <div className="flex items-center space-x-6">
       <Link href="/test"> <h3 className='px-4 py-1 bg-[#1a1a1a] text-white text-sm font-medium rounded border-solid border-[1px]'>Dashboard</h3></Link>
        <Link href="/test"><h4 className='px-4 py-1 bg-[#3CFF9C] text-black text-sm font-medium rounded border-solid border-[1px]'>Sign in/Sign up</h4></Link>
        <Link href="https://github.com/MattTorrSuarr/Evograph" target="_blank" rel="noopener noreferrer">
<Image src={gbimg} alt="" width={32} height={32}  className="w-8 h-8 filter brightness-0 invert" /></Link>
      </div>
          </div>
      <div className="font-normal border-b border-[#2E2E2E] w-full mt-1 "></div>
      <div className=" ml-10">
        <p className="flex items-center justify-center bg-[#191919] text-[13px]  font-bold w-[200px] h-[30px] text-white  rounded-[20px] mt-[100px] ">edncrj ejjed ejff ejjedjd </p>
        <h4 className="text-[80px] font-bold max-w-[1100px]">e ef ejjedjd ejccee <span className="text-[#3CFF9C]">ejjej</span> ejejjejee ejejeeejee ememeeefda</h4>
        <p className="text-[25px] font-normal mt-10">ednedncrj ejjed jejs cejff ejjej ejejjejee ejejeeejee ememeeefdaejjejee ejejeeejee ememeeefda</p>
  <Link href="/dashboard">
  <button className="mt-10 font-bold bg-[#3CFF9C] text-black h-[50px] w-[200px] rounded-[50px]">
    get startedx|
  </button>
</Link>
   </div>
   <div className='absolute bottom-0 left-0 w-full flex flex-col items-center justify-center text-white border-t h-[120px] '>
<h1>Evograph</h1>
<p>Crete graphs with <span className='text-[#3CFF9C]'>purpose</span></p>
   </div>

      
      
    </>
  );
}
