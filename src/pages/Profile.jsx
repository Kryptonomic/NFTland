const Profile = () => {
  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl mb-4">👤 Your NFTLAND Profile</h2>
      <p className="mb-4 text-gray-300">
        Here’s where your progress shines. View your connected wallet, token holding duration, in-game coin total, and NFTs unlocked through your journey.
      </p>
      <p className="mb-4 text-gray-400 italic">
        Level up by playing more, holding longer, and collecting smarter. Your Bitland legacy starts here.
      </p>
      <div className="mt-6 border border-purple-600 bg-gray-900 p-6 rounded-xl text-center">
        [ Profile Stats Placeholder — full wallet stats, achievements, XP chart ]
      </div>
    </div>
  );
};

export default Profile;