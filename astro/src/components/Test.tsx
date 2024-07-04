import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Test.module.scss";

export default function Test() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi aut facilis magnam dolorem beatae,
        voluptates hic dolores quod, esse, nobis at laborum animi similique. Dolorum dignissimos cumque quo, quod sequi
        fugiat consectetur placeat omnis quia, voluptatum ullam neque. Eum beatae explicabo aliquid porro, molestias
        nihil omnis ipsam quam suscipit tempora velit et deleniti quas, illum quo fugiat doloremque, sapiente quibusdam!
        Eos vel aliquam, at error delectus rerum placeat iure. Adipisci magni, porro reiciendis, delectus, eveniet
        debitis quos odit tempore quis dolorem repudiandae at fuga dignissimos ipsum? Error hic similique atque ipsum
        dolorem at deserunt amet recusandae aspernatur perferendis accusamus, expedita facilis porro beatae voluptatibus
        rem iure veritatis quos voluptate ipsa ab tenetur maxime. Beatae, tenetur. Adipisci saepe, nobis ut dolores
        quaerat quidem alias accusamus magnam provident tempora velit corrupti distinctio sed voluptate pariatur ea
        explicabo id, voluptatibus libero, et veritatis incidunt! Quo delectus quidem facilis maxime molestiae deleniti?
        Dolores saepe eligendi ratione ipsum fugiat iste facilis voluptatibus laudantium voluptatem ab dolore et,
        assumenda numquam eius maiores magni deserunt veniam dolorum qui nam repellat ipsa corrupti impedit. Iusto
        tempore expedita cupiditate! Officiis dolorum deserunt, reprehenderit vero ducimus nihil quia est consequuntur
        itaque soluta hic impedit nam voluptatum laborum similique aspernatur!
      </p>
      <motion.div
        className={styles.line}
        ref={ref}
        style={{ scaleY: scrollYProgress }}></motion.div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestiae similique aliquam, fuga eos sunt,
        distinctio ut quaerat qui nisi architecto, obcaecati perferendis illum illo sit sint iusto error cum reiciendis!
        Reprehenderit consequatur, excepturi mollitia, natus itaque sapiente quasi magnam asperiores inventore
        laudantium tempore expedita atque, neque recusandae. Deserunt ipsa animi porro aspernatur dolor voluptatibus
        totam, laboriosam perspiciatis doloribus ea, error magnam possimus maxime, eum recusandae iure tempora. Saepe
        ducimus repellendus quasi quas ipsam ut, rem dolore illo, eligendi eum repudiandae doloremque eaque minima, quod
        assumenda corporis distinctio architecto! Praesentium, ipsa doloribus accusamus cupiditate nisi ducimus neque
        corrupti suscipit nihil rem excepturi quibusdam nesciunt enim nam perspiciatis distinctio rerum laborum. Dolores
        facere iusto architecto sapiente. Id quaerat maiores numquam. Cumque quis nulla veritatis consequuntur corrupti
        enim vel aliquid deleniti! Saepe, delectus doloremque dolorem minima voluptate recusandae, debitis iste quam
        velit id, earum rerum numquam. A debitis autem, distinctio totam quos ipsa, eveniet quas reiciendis labore iure
        ad officia nemo cupiditate vitae molestias nostrum eum eos aliquid voluptate quia? Assumenda explicabo sunt
        corrupti nihil enim expedita, totam consectetur iusto animi. Amet itaque laborum consequuntur quos aut dolore
        veniam, reprehenderit veritatis repellat saepe. Earum optio saepe culpa sunt quis perferendis tempora impedit.
      </p>
    </>
  );
}
