import { CgProfile } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { IoIosAnalytics } from 'react-icons/io'
import { TbSettings } from 'react-icons/tb'
import { PiShootingStarBold } from 'react-icons/pi'


type User = {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    avatar: string;
  }
  

const Sidebar = () => {
    const user = [
        {
            id: 1,
            name:'Victor',
            surname:'Formisano',
            email:'victor@gmail.com',
            password:'123',
            avatar:'https://media.licdn.com/dms/image/D4D03AQGB9t3WrMi-Ow/profile-displayphoto-shrink_800_800/0/1687525378549?e=1695859200&v=beta&t=olWep7nYLxFkpBiHBcMOvUib9G-d6W6a2x_wWK3bVas'
        }
    ]
    return (
      <div className='p-6 mt-28'>
          <div className='gap-4'>
              <ul>
                  <li className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 bg-zinc-200 p-4 text-zinc-900 rounded-xl">
                        <AiOutlineHome className='text-2xl'/>
                        <a className="text-base" href="/dashboard">Dashboard</a>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                        <PiShootingStarBold className='text-2xl'/>
                        <a className="text-base" href="/dashboard">Goals</a>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                        <MdAttachMoney className='text-2xl'/>
                        <a className="text-base" href="/transactions">Transactions</a>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                        <IoIosAnalytics className='text-2xl'/>
                        <a className="text-base" href="/analytics">Analytics</a>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                        <CgProfile className='text-2xl'/>
                        <a className="text-base" href="/profile">Profile</a>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                        <TbSettings className='text-2xl'/>
                        <a className="text-base" href="/settings">Settings</a>
                    </div>
                  </li>
              </ul>
          </div>
          <div className="h-60 rounded-xl bg-zinc-100 text-zinc-900 p-4 font-semibold">
            <div className="flex justify-between">
              <h5 className="">ENTRANCES</h5>
              <h5 className="text-green-700">R$ 34.230,98</h5>
            </div>
            <div className="flex justify-between">
              <h5 className="">EXITS</h5>
              <h5 className="text-red-600">R$ 13.430,33</h5>
            </div>
            <div className="flex justify-between before: border-t border-zinc-500 mt-6">
              <h5 className="">BALANCE</h5>
              <h5 className="text-blue-700">R$ 20.080,65</h5>
            </div>
            <div id="a" className="flex self-end items-center justify-center  gap-2 text-xl">
                <CgProfile className="text-4xl" />
                <h4 className="text-2xl">{user[0].name} {user[0].surname}</h4>
            </div>
          </div>
      </div>
    )
  }
  
  export default Sidebar




  