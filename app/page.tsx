import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-4xl p-8 gap-8">
  {/* 標題區 */}
  <header>
    <h1 className="text-3xl font-bold text-gray-900">建設開發管理系統</h1>
    <p className="text-gray-500">即時監控專案進度與土地開發數據</p>
  </header>

  {/* 資訊卡片區 */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="font-semibold text-lg text-blue-600">最新都更案</h2>
      <p className="mt-2 text-gray-700">大同區更新案 - 獎勵申請中</p>
    </div>
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="font-semibold text-lg text-blue-600">專案總投資</h2>
      <p className="mt-2 text-gray-700">新台幣 900 億元</p>
    </div>
  </section>
</main>
    </div>
  );
}
