import { Link } from "react-router-dom";
import SvgIconTeleg from "./SvgIconTeleg";
import SvgIconInsta from "./SvgIconInsta";
import { LogoTwitter } from "./SvgIconTwitter";

export default function PreFooter() {
    return (
        <div className="px-16 my-20">
            <div className="flex justify-between items-center mb-10 pb-5 border-b-2 border-solid">
                <div className="flex flex-col md:text-3xl text-xl">
                    <span className="font-bold italic">Foodieland.</span>
                    <span>Lorem ipsum dolor sit amet, consectetuipisicing elit, </span>
                </div>
                    <tr className='flex flex-wrap md:gap-10 gap-2 md:text-3xl text-xl font-bold'>
                        <td><Link className='no-underline' to='/'>Home</Link></td>
                        <td><Link className='no-underline' to='/'>Recipes</Link></td>
                        <td><Link className='no-underline' to='/'>Blog</Link></td>
                        <td><Link className='no-underline' to='/'>Contact</Link></td>
                        <td><Link className='no-underline' to='/'>About Us</Link></td>
                    </tr>
            </div>
            <div>
                <div className="grid grid-cols-3">
                    <span className="grid col-span-2 justify-start font-normal text-2xl">© 2020 Flowbase. Powered by Webflow</span>
                    <tr className='inline-flex justify-end items-center gap-5 leading[100px]'>
                        <td><Link className='no-underline' to='/'><SvgIconTeleg /></Link></td>
                        <td><Link className='no-underline' to='/'><SvgIconInsta /></Link></td>
                        <td><Link className='no-underline' to='/'></Link><LogoTwitter /></td>
                    </tr>
                </div>
            </div>
        </div>
    )
}
