// src/app/book-categories/layout.jsx
import SidebarComponent from "@/components/SidebarComponent";

export default function Layout({ children }) {
  return (
    <>
      {/* <SidebarComponent /> */}
      <main>{children}</main>
    </>
  );
}
