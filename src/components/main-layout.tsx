import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

interface MainLayoutProps {
  children: React.ReactNode
;}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header/>
      <div className="children-container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout