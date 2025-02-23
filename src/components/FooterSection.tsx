const FooterSection = () => {
  return (
    <div className="lg:hidden col-span-1 row-span-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
      <div className="text-text text-xs text-center h-full mt-2 mx-1">
        Made with ❤️ by{" "}
        <a
          href="https://vishnudevaggarwal.engineer"
          className="text-accent/90 underline hover:text-accent"
        >
          Vishnu Dev Aggarwal
        </a>{" "}
        using Next.js
      </div>
    </div>
  );
};

export default FooterSection;
