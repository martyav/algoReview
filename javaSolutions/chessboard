static String chessboard(int size) {
   String board = "";

   for (int i = 0; i < size; i++) {
     for (int j = 0; j < size; j++) {
         if ((j % size) == 0)
             board += System.lineSeparator();

         if ((i % 2) == 0) {
             if ((j % 2) == 0) {
                board += " ";
             } else {
                board += "#";
             }
         } else {
             if ((j % 2) == 0) {
                board += "#";
             } else {
                board += " ";
             }
         }
     }
   }

   return board
}
