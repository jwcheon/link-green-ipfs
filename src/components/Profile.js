function Profile() {
    return (
      <div className="flex flex-col items-center space-y-4 mb-10">
        <img src="/img/ipfs.png" alt="Profile" className="h-20 rounded-lg" />
        <div className="flex flex-col items-center space-y-1">
          <div className="font-semibold text-lg">IPFS Landing Page</div>
          <div className="font-light text-xs">Check out our links!</div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  