import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 mx-4 border-b-2 md:flex max-w-7xl mx-auto'>
             <h1 className='text-4xl font-bold'>React Knowledge Cate</h1>
             <img src={profile} alt=""/>
        </div>
    );
}

export default Header;