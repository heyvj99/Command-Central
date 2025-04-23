import { useState } from 'react'
import './App.css'
import Header from '@/components/Header'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function App() {
  return (
    // <div className="min-h-screen bg-background">
    //   <Header />
    //   <main className="container mx-auto p-4">
        
        
    //   </main>
    // </div>

    <SidebarProvider>
    <AppSidebar />
    <main className='w-full'>
      <SidebarTrigger />
      <div className='w-full'>
        <Header />
      </div>
    </main>
  </SidebarProvider>
    
  )
}

export default App
