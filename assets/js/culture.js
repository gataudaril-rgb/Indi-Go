(() => {
    const root = document.querySelector('.culture3-shell');
    if (!root) return;

    const modal = document.getElementById('culture3-modal');
    const modalKicker = document.getElementById('c3-modal-kicker');
    const modalTitle = document.getElementById('c3-modal-title');
    const modalBody = document.getElementById('c3-modal-body');
    const modalImg = modal?.querySelector('.c3-modal__img') || null;
    const closeEls = Array.from(modal?.querySelectorAll('[data-c3-close]') || []);
    const closeBtn = modal?.querySelector('.c3-modal__close') || null;

    if (!modal || !modalKicker || !modalTitle || !modalBody || !modalImg) return;

    const getLang = () => (document.documentElement?.dataset?.lang === 'id' ? 'id' : 'en');
    const pick = (pair) => (getLang() === 'id' ? (pair.id || pair.en) : (pair.en || pair.id)) || '';

    const CONTENT = {
        religion: {
            hinduism: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Hinduism', id: 'Hinduisme' },
                img: 'https://images.unsplash.com/photo-1582550945154-66ea8fff25e8?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Temple architecture', id: 'Arsitektur kuil' },
                body: {
                    en: `
                        <p>One of the world’s oldest living religions. Hindu traditions are diverse, but often center on
                            <strong>dharma</strong> (duty/ethics), <strong>karma</strong> (action & consequences), and devotion (<em>bhakti</em>).</p>
                        <ul>
                            <li><strong>Worship:</strong> temples, home shrines, puja and aarti.</li>
                            <li><strong>Texts:</strong> Vedas, Upanishads, Bhagavad Gita.</li>
                            <li><strong>Common celebrations:</strong> Diwali, Holi, Navratri/Durga Puja.</li>
                        </ul>
                    `,
                    id: `
                        <p>Salah satu agama tertua yang masih hidup hingga sekarang. Tradisi Hindu sangat beragam, tetapi sering berpusat pada
                            <strong>dharma</strong> (kewajiban/etika), <strong>karma</strong> (tindakan & konsekuensinya), dan devosi (<em>bhakti</em>).</p>
                        <ul>
                            <li><strong>Ibadah:</strong> kuil, altar di rumah, puja dan aarti.</li>
                            <li><strong>Teks:</strong> Veda, Upanishad, Bhagavad Gita.</li>
                            <li><strong>Perayaan umum:</strong> Diwali, Holi, Navratri/Durga Puja.</li>
                        </ul>
                    `
                }
            },
            islam: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Islam', id: 'Islam' },
                img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Mosque interior', id: 'Interior masjid' },
                body: {
                    en: `
                        <p>Islam in India has deep historical roots and a rich cultural presence. Practices emphasize faith in one God,
                            daily prayer, charity, fasting, and community.</p>
                        <ul>
                            <li><strong>Worship:</strong> mosques; daily prayers; Friday congregational prayer.</li>
                            <li><strong>Common celebrations:</strong> Eid al-Fitr, Eid al-Adha, Muharram (observed by some communities).</li>
                            <li><strong>Heritage:</strong> notable Indo-Islamic architecture and scholarship.</li>
                        </ul>
                    `,
                    id: `
                        <p>Islam di India memiliki akar sejarah yang panjang dan pengaruh budaya yang kuat. Praktiknya menekankan iman kepada Tuhan Yang Esa,
                            salat, sedekah, puasa, dan kebersamaan komunitas.</p>
                        <ul>
                            <li><strong>Ibadah:</strong> masjid; salat harian; salat Jumat berjamaah.</li>
                            <li><strong>Perayaan umum:</strong> Idulfitri, Iduladha, Muharram (di sebagian komunitas).</li>
                            <li><strong>Warisan:</strong> arsitektur dan tradisi keilmuan Indo-Islam yang terkenal.</li>
                        </ul>
                    `
                }
            },
            christianity: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Christianity', id: 'Kristen' },
                img: 'https://images.unsplash.com/photo-1520975729657-0a94d7f3a1fb?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Church at sunset', id: 'Gereja saat senja' },
                body: {
                    en: `
                        <p>Christian communities in India range from ancient traditions to modern congregations. Worship often includes prayer,
                            hymns, and church services.</p>
                        <ul>
                            <li><strong>Worship:</strong> churches; Sunday services; community celebrations.</li>
                            <li><strong>Common celebrations:</strong> Christmas, Easter, and local patron festivals in some regions.</li>
                            <li><strong>Regional presence:</strong> strong communities in parts of the South and Northeast.</li>
                        </ul>
                    `,
                    id: `
                        <p>Komunitas Kristen di India mencakup tradisi kuno hingga jemaat modern. Ibadah umumnya meliputi doa,
                            nyanyian rohani, dan kebaktian di gereja.</p>
                        <ul>
                            <li><strong>Ibadah:</strong> gereja; kebaktian Minggu; perayaan komunitas.</li>
                            <li><strong>Perayaan umum:</strong> Natal, Paskah, serta festival santo pelindung di beberapa daerah.</li>
                            <li><strong>Keberadaan wilayah:</strong> komunitas kuat di wilayah Selatan dan Timur Laut.</li>
                        </ul>
                    `
                }
            },
            sikhism: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Sikhism', id: 'Sikhisme' },
                img: 'https://images.unsplash.com/photo-1609152113966-1d0d1a77c341?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Golden Temple reflection', id: 'Refleksi Golden Temple' },
                body: {
                    en: `
                        <p>Sikhism emphasizes devotion to one God, honest work, equality, and service. Community kitchens (<em>langar</em>)
                            are a tradition of sharing meals with anyone.</p>
                        <ul>
                            <li><strong>Worship:</strong> gurdwaras; scripture reading and community prayer.</li>
                            <li><strong>Key values:</strong> equality, service, compassion.</li>
                            <li><strong>Common celebrations:</strong> Vaisakhi, Gurpurabs.</li>
                        </ul>
                    `,
                    id: `
                        <p>Sikhisme menekankan devosi kepada Tuhan Yang Esa, kerja jujur, kesetaraan, dan pelayanan. Dapur komunitas (<em>langar</em>)
                            adalah tradisi berbagi makanan untuk siapa pun.</p>
                        <ul>
                            <li><strong>Ibadah:</strong> gurdwara; pembacaan kitab suci dan doa bersama.</li>
                            <li><strong>Nilai utama:</strong> kesetaraan, pelayanan, welas asih.</li>
                            <li><strong>Perayaan umum:</strong> Vaisakhi, Gurpurab.</li>
                        </ul>
                    `
                }
            },
            buddhism: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Buddhism', id: 'Buddhisme' },
                img: 'https://images.unsplash.com/photo-1558865869-c93c008a0d35?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Buddhist prayer flags', id: 'Bendera doa Buddhis' },
                body: {
                    en: `
                        <p>Originating in India, Buddhism focuses on understanding suffering and cultivating compassion and wisdom
                            through ethical living and meditation.</p>
                        <ul>
                            <li><strong>Places:</strong> key pilgrimage sites include Bodh Gaya, Sarnath, Kushinagar.</li>
                            <li><strong>Practice:</strong> meditation, mindfulness, ethical conduct.</li>
                            <li><strong>Traditions:</strong> diverse schools and regional communities.</li>
                        </ul>
                    `,
                    id: `
                        <p>Berasal dari India, Buddhisme berfokus pada memahami penderitaan dan menumbuhkan welas asih serta kebijaksanaan
                            melalui hidup beretika dan meditasi.</p>
                        <ul>
                            <li><strong>Tempat:</strong> situs ziarah penting antara lain Bodh Gaya, Sarnath, Kushinagar.</li>
                            <li><strong>Praktik:</strong> meditasi, mindfulness, perilaku etis.</li>
                            <li><strong>Tradisi:</strong> beragam aliran dan komunitas daerah.</li>
                        </ul>
                    `
                }
            },
            jainism: {
                kicker: { en: 'RELIGION', id: 'AGAMA' },
                title: { en: 'Jainism', id: 'Jainisme' },
                img: 'https://images.unsplash.com/photo-1604600351435-9a8f7c71c1cd?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Carved stone temple', id: 'Kuil batu berukir' },
                body: {
                    en: `
                        <p>Jainism is known for its strong emphasis on <strong>ahimsa</strong> (non-violence) and self-discipline.
                            Many followers practice careful vegetarianism and ethical living.</p>
                        <ul>
                            <li><strong>Key ideas:</strong> non-violence, truth, non-attachment.</li>
                            <li><strong>Worship:</strong> temples; rituals and community gatherings.</li>
                            <li><strong>Notable heritage:</strong> intricate temple architecture and art.</li>
                        </ul>
                    `,
                    id: `
                        <p>Jainisme dikenal dengan penekanan kuat pada <strong>ahimsa</strong> (tanpa kekerasan) dan disiplin diri.
                            Banyak penganutnya menjalankan vegetarianisme yang ketat dan hidup etis.</p>
                        <ul>
                            <li><strong>Gagasan utama:</strong> tanpa kekerasan, kebenaran, tidak melekat.</li>
                            <li><strong>Ibadah:</strong> kuil; ritual dan pertemuan komunitas.</li>
                            <li><strong>Warisan terkenal:</strong> arsitektur kuil yang rumit dan seni ukir.</li>
                        </ul>
                    `
                }
            }
        },
        ceremony: {
            'puja-aarti': {
                kicker: { en: 'CEREMONY', id: 'UPACARA' },
                title: { en: 'Puja & Aarti', id: 'Puja & Aarti' },
                img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Hands with lamps during aarti', id: 'Tangan dengan lampu saat aarti' },
                body: {
                    en: `
                        <p><strong>Puja</strong> is a devotional worship ritual, and <strong>aarti</strong> is the offering of light (often a lamp)
                            accompanied by prayers and songs.</p>
                        <ul>
                            <li><strong>Where:</strong> temples and home shrines.</li>
                            <li><strong>What you’ll see:</strong> flowers, incense, bells, lamps, offerings.</li>
                            <li><strong>Why it matters:</strong> daily rhythm of devotion for many families.</li>
                        </ul>
                    `,
                    id: `
                        <p><strong>Puja</strong> adalah ritual ibadah devosi, dan <strong>aarti</strong> adalah persembahan cahaya (biasanya lampu)
                            yang diiringi doa dan nyanyian.</p>
                        <ul>
                            <li><strong>Di mana:</strong> kuil dan altar rumah.</li>
                            <li><strong>Apa yang terlihat:</strong> bunga, dupa, lonceng, lampu, persembahan.</li>
                            <li><strong>Maknanya:</strong> ritme devosi harian bagi banyak keluarga.</li>
                        </ul>
                    `
                }
            },
            wedding: {
                kicker: { en: 'CEREMONY', id: 'UPACARA' },
                title: { en: 'Wedding Rituals', id: 'Ritual Pernikahan' },
                img: 'https://images.unsplash.com/photo-1529634899869-1f03bfcb1d5b?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Bride and groom hands', id: 'Tangan pengantin' },
                body: {
                    en: `
                        <p>Indian weddings can be multi-day events with regional variations. Many traditions emphasize family blessing,
                            vows, and community celebration.</p>
                        <ul>
                            <li><strong>Common moments:</strong> exchange of garlands; blessings from elders; ritual steps vary.</li>
                            <li><strong>What to expect:</strong> colorful outfits, music, dancing, shared meals.</li>
                            <li><strong>Note:</strong> customs differ by religion and region.</li>
                        </ul>
                    `,
                    id: `
                        <p>Pernikahan di India bisa berlangsung beberapa hari dengan variasi daerah. Banyak tradisi menekankan restu keluarga,
                            janji, dan perayaan komunitas.</p>
                        <ul>
                            <li><strong>Momen umum:</strong> tukar kalung bunga; restu orang tua/sepuh; tahapan ritual berbeda-beda.</li>
                            <li><strong>Yang biasanya ada:</strong> pakaian warna-warni, musik, tari, makan bersama.</li>
                            <li><strong>Catatan:</strong> adat berbeda menurut agama dan wilayah.</li>
                        </ul>
                    `
                }
            },
            namkaran: {
                kicker: { en: 'CEREMONY', id: 'UPACARA' },
                title: { en: 'Namkaran', id: 'Namkaran' },
                img: 'https://images.unsplash.com/photo-1608067408101-e1d2d1bc4d14?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Baby feet', id: 'Kaki bayi' },
                body: {
                    en: `
                        <p>A family ritual to welcome a baby and formally announce a name. Specific steps vary, but it often includes prayers and blessings.</p>
                        <ul>
                            <li><strong>Theme:</strong> gratitude, protection, and good wishes.</li>
                            <li><strong>Often includes:</strong> elders’ blessings, community meal, small gifts.</li>
                        </ul>
                    `,
                    id: `
                        <p>Ritual keluarga untuk menyambut bayi dan mengumumkan nama secara resmi. Tahapannya bervariasi, tetapi sering berisi doa dan pemberkatan.</p>
                        <ul>
                            <li><strong>Temanya:</strong> syukur, perlindungan, dan harapan baik.</li>
                            <li><strong>Biasanya ada:</strong> restu orang tua/sepuh, makan bersama, hadiah kecil.</li>
                        </ul>
                    `
                }
            },
            mundan: {
                kicker: { en: 'CEREMONY', id: 'UPACARA' },
                title: { en: 'Mundan', id: 'Mundan' },
                img: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Hair cutting ritual', id: 'Ritual pemotongan rambut' },
                body: {
                    en: `
                        <p>A childhood ritual where a baby or young child’s hair is cut for the first time. It’s often seen as a fresh start and a blessing for health.</p>
                        <ul>
                            <li><strong>Where:</strong> temples or family gatherings.</li>
                            <li><strong>Meaning:</strong> purification, growth, and good fortune.</li>
                        </ul>
                    `,
                    id: `
                        <p>Ritual masa kecil saat rambut bayi/anak dipotong untuk pertama kali. Sering dimaknai sebagai awal baru dan doa untuk kesehatan.</p>
                        <ul>
                            <li><strong>Di mana:</strong> kuil atau acara keluarga.</li>
                            <li><strong>Makna:</strong> penyucian, pertumbuhan, dan keberuntungan.</li>
                        </ul>
                    `
                }
            },
            'griha-pravesh': {
                kicker: { en: 'CEREMONY', id: 'UPACARA' },
                title: { en: 'Griha Pravesh', id: 'Griha Pravesh' },
                img: 'https://images.unsplash.com/photo-1520975869011-0d7cc0a2f0a6?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'Home entrance', id: 'Pintu masuk rumah' },
                body: {
                    en: `
                        <p>A ritual performed when entering a new home. Families may do prayers and offerings to seek blessings and harmony in the household.</p>
                        <ul>
                            <li><strong>Typical elements:</strong> puja, lamps, and a shared meal.</li>
                            <li><strong>Meaning:</strong> gratitude and protection for the new space.</li>
                        </ul>
                    `,
                    id: `
                        <p>Ritual saat menempati rumah baru. Keluarga biasanya melakukan doa dan persembahan untuk memohon berkah dan keharmonisan.</p>
                        <ul>
                            <li><strong>Unsur umum:</strong> puja, lampu, dan makan bersama.</li>
                            <li><strong>Makna:</strong> syukur dan perlindungan untuk tempat baru.</li>
                        </ul>
                    `
                }
            },
            pilgrimage: {
                kicker: { en: 'TRADITION', id: 'TRADISI' },
                title: { en: 'Pilgrimage & Bathing', id: 'Ziarah & Mandi Suci' },
                img: 'https://images.unsplash.com/photo-1524492412937-4961d66aa114?auto=format&fit=crop&w=1400&q=80',
                alt: { en: 'River gathering', id: 'Kerumunan di sungai' },
                body: {
                    en: `
                        <p>Pilgrimage journeys and ritual bathing are part of many Indian traditions. Some gatherings are local, while others become massive events.</p>
                        <ul>
                            <li><strong>Why people go:</strong> devotion, vows, cleansing, seeking blessings.</li>
                            <li><strong>Where:</strong> rivers, temples, and sacred towns (varies by tradition).</li>
                            <li><strong>Tip:</strong> crowds can be intense—plan, hydrate, and follow guidance.</li>
                        </ul>
                    `,
                    id: `
                        <p>Perjalanan ziarah dan mandi ritual adalah bagian dari banyak tradisi di India. Ada yang berskala lokal, ada juga yang menjadi event besar.</p>
                        <ul>
                            <li><strong>Tujuan:</strong> devosi, nazar, penyucian, mencari berkah.</li>
                            <li><strong>Lokasi:</strong> sungai, kuil, dan kota suci (berbeda tiap tradisi).</li>
                            <li><strong>Tips:</strong> keramaian bisa padat—siapkan rencana, minum cukup, dan ikuti arahan.</li>
                        </ul>
                    `
                }
            }
        }
    };

    let lastActiveEl = null;
    let selected = null; // { group, key }

    const renderModal = () => {
        if (!selected) return;
        const data = CONTENT?.[selected.group]?.[selected.key];
        if (!data) return;

        modalKicker.textContent = pick(data.kicker);
        modalTitle.textContent = pick(data.title);
        modalBody.innerHTML = pick(data.body);

        modalImg.src = data.img || '';
        modalImg.alt = pick(data.alt) || pick(data.title) || '';
    };

    const openModal = ({ group, key }) => {
        const data = CONTENT?.[group]?.[key];
        if (!data) return;

        selected = { group, key };
        lastActiveEl = document.activeElement;

        renderModal();
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('c3-modal-open');
        closeBtn?.focus();
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('c3-modal-open');
        selected = null;

        if (lastActiveEl && typeof lastActiveEl.focus === 'function') {
            lastActiveEl.focus();
        }
    };

    root.querySelectorAll('.c3-open[data-c3-key][data-c3-group]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-c3-key');
            const group = btn.getAttribute('data-c3-group');
            if (!key || !group) return;
            openModal({ group, key });
        });
    });

    closeEls.forEach((el) => el.addEventListener('click', closeModal));

    window.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!modal.classList.contains('is-open')) return;
        e.preventDefault();
        closeModal();
    });

    window.addEventListener('indigo:lang', () => {
        if (!modal.classList.contains('is-open')) return;
        renderModal();
    });
})();
