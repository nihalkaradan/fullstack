class Binary{
	public static void main(String[] args) {
		int no=Integer.parseInt(args[0]);
		String vary="";
		while(no>0){
			int z=no%2;
			vary=z+vary;
			no=no/2;
		}

		System.out.print(vary);


	}
}