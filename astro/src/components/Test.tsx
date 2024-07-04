import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Test.module.scss'

export default function Test() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi quidem qui labore quaerat maxime inventore, eveniet ipsam, facere consequuntur numquam perferendis cupiditate reprehenderit rem quas repellat earum fugit nemo? Quam architecto ipsa at et neque cum excepturi ut hic dolorem magni explicabo laudantium iure labore quibusdam libero ab alias officiis sunt repellat aliquam deserunt molestias sequi, facere dicta! Repudiandae voluptatibus ipsa laudantium dignissimos tempore iste obcaecati, quisquam voluptatem, quidem at officiis numquam aut quibusdam assumenda aperiam pariatur maiores, nam ab blanditiis! At soluta, facilis, earum debitis illum iusto placeat impedit reiciendis cum nemo recusandae quam. Asperiores, facere voluptate assumenda nihil maiores autem atque sit tempora omnis! Hic debitis voluptatum rerum explicabo suscipit. Ipsam eos dolorem porro autem. Eum ut assumenda fugiat voluptatum magnam voluptate aut soluta omnis ab. Omnis, enim exercitationem. Inventore debitis temporibus tempora libero rerum. Eligendi at, natus, nesciunt accusantium cum impedit dolorum quibusdam tempore beatae in asperiores, dicta assumenda sit doloribus! Non tempore veniam dolorem id enim expedita officia similique sunt! Nisi cum magnam laboriosam voluptas debitis hic officiis in explicabo voluptatibus expedita perferendis, repudiandae sequi tempora iure ullam, labore at, quod ea blanditiis neque eos accusantium culpa. Asperiores rerum est odio veritatis quo impedit tempora.</p>
      <motion.div className={styles.line} ref={ref} style={{ scaleY: scrollYProgress }}></motion.div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestiae similique aliquam, fuga eos sunt, distinctio ut quaerat qui nisi architecto, obcaecati perferendis illum illo sit sint iusto error cum reiciendis! Reprehenderit consequatur, excepturi mollitia, natus itaque sapiente quasi magnam asperiores inventore laudantium tempore expedita atque, neque recusandae. Deserunt ipsa animi porro aspernatur dolor voluptatibus totam, laboriosam perspiciatis doloribus ea, error magnam possimus maxime, eum recusandae iure tempora. Saepe ducimus repellendus quasi quas ipsam ut, rem dolore illo, eligendi eum repudiandae doloremque eaque minima, quod assumenda corporis distinctio architecto! Praesentium, ipsa doloribus accusamus cupiditate nisi ducimus neque corrupti suscipit nihil rem excepturi quibusdam nesciunt enim nam perspiciatis distinctio rerum laborum. Dolores facere iusto architecto sapiente. Id quaerat maiores numquam. Cumque quis nulla veritatis consequuntur corrupti enim vel aliquid deleniti! Saepe, delectus doloremque dolorem minima voluptate recusandae, debitis iste quam velit id, earum rerum numquam. A debitis autem, distinctio totam quos ipsa, eveniet quas reiciendis labore iure ad officia nemo cupiditate vitae molestias nostrum eum eos aliquid voluptate quia? Assumenda explicabo sunt corrupti nihil enim expedita, totam consectetur iusto animi. Amet itaque laborum consequuntur quos aut dolore veniam, reprehenderit veritatis repellat saepe. Earum optio saepe culpa sunt quis perferendis tempora impedit.</p>
    </>
  )
}
