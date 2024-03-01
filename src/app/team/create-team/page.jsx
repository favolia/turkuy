import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full lg:w-4/6 min-h-screen flex flex-col bg-white px-3 lg:pr-0 lg:pl-6 pt-4 pb-10 dark:text-black">
            <Link href="/" className="text-center lg:text-left text-4xl font-baby_blocks">BUAT TIM</Link>
            <div className="w-full flex flex-col gap-y-10 lg:flex-row mt-5">
                <div className="min-w-72">
                    <div>
                        <h2 className="font-silkscreen text-lg">NAMA TIM</h2>
                        <Input placeholder="NAMA TIM KAMU" className="font-roboto" />
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <div>
                            <h2 className="font-silkscreen text-lg">ID KAPTEN</h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans">mas faiz</span></span>
                        </div>
                        <div>
                            <h2 className="font-silkscreen text-lg">ID PLAYER 2</h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans text-yellow-600">Mencari...</span></span>
                        </div>
                        <div>
                            <h2 className="font-silkscreen text-lg">ID PLAYER 3</h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans text-red-600">Tidak ditemukan!</span></span>
                        </div>
                        <div>
                            <h2 className="font-silkscreen text-lg">ID PLAYER 4</h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans">mas faiz</span></span>
                        </div>
                        <div>
                            <h2 className="font-silkscreen text-lg">ID PLAYER 5</h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans">mas faiz</span></span>
                        </div>
                        <div>
                            <h2 className="font-silkscreen text-lg">ID CADANGAN <span className="font-sans font-bold text-xs leading-3">{'[opsional]'}</span></h2>
                            <div className="flex justify-center items-center gap-x-2">
                                <Input placeholder="123456..." className="font-roboto" />
                                <Button size="sm" variant="secondary" className="font-silkscreen">CARI</Button>
                            </div>
                            <span className="text-xs font-silkscreen">Nama: <span className="font-sans">mas faiz</span></span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-y-5 justify-start items-center text-white sticky top-10">
                    <div className="flex flex-col gap-y-5">

                        <div className="w-72 h-96 border bg-secondary-foreground dark:bg-secondary flex flex-col items-center justify-between py-3 shadow-[12px_12px_0px_0px_#E2E8F0]">
                            <div className="flex flex-col gap-y-6">
                                <div>
                                    <h1 className="text-white text-2xl font-silkscreen">KECAP ABC</h1>
                                </div>
                                <div className="text-center text-sm">
                                    <p className="font-silkscreen">KAPTEN:</p>
                                    <p>mas faiz</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-8">
                                <div className="text-center text-sm">
                                    <p className="font-silkscreen">ANGGOTA:</p>
                                    <p>tukimin</p>
                                    <p>mas dimas</p>
                                    <p>farhan kebab</p>
                                    <p>jaki</p>
                                </div>

                                <div className="text-center text-sm">
                                    <p className="font-silkscreen">CADANGAN:</p>
                                    <p>-</p>
                                </div>

                                <div className="mt-1 text-center text-sm">
                                    <p className="font-silkscreen">ID: {Date.now()}</p>
                                </div>
                            </div>

                        </div>
                        <div className="w-full flex justify-evenly">
                            <Button className="font-silkscreen" variant="">SIMPAN</Button>
                            <Button className="font-silkscreen" variant="secondary">UNDUH KARTU</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page